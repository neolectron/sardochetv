import Layout from '../components/Layout/Layout.jsx';
import Link from 'next/link';
import Player from '../components/Player/Player.jsx';
import Playlist from '../components/Playlist/Playlist.jsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Controls from '../components/Controls/Controls.jsx';

const fetchThumbnail = (videoID) =>
  fetch(
    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}&format=json`
  )
    .then((res) => res.json())
    .then((json) => ({ ...json, videoID }));

const SoundPage = () => {
  const { query, push } = useRouter();
  const [current, setCurrent] = useState(0);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/sound`)
      .then((res) => res.json())
      .then((IDlist) => IDlist.map(fetchThumbnail))
      .then((fetchAll) => Promise.all(fetchAll))
      .then((resVideoList) => setVideoList(resVideoList))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!query.video) return;
    const index = videoList.findIndex((el) => el.videoID === query.video);
    if (index < 0) {
      push(`/asmr?video=${videoList[0].videoID}`);
    } else {
      setCurrent(index);
    }
  }, [query, push, videoList]);

  const menuItems = <Playlist list={videoList} onItemChange={setCurrent} />;

  return (
    <Layout menu={Boolean(videoList.length)} menuItems={menuItems} title="ASMR">
      <div className="flex justify-center h12 p-8">
        <Link href="/asmr">
          <a className="relative">
            <img src="/sardoche.png" alt="logotype sardoche" />
            <div className="text-orange pulse text-shadow font-bold text-2xl absolute bottom-0 -right-8">
              ASMR
            </div>
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-start py-8 flex-grow">
        <div
          style={{ maxWidth: '900px' }}
          className="bg-black bg-blur bg-opacity-40 text-white text-xl w-full sm:w-5/6"
        >
          {videoList.length === 0 ? (
            <p>Pas de vidéos pour le moment :&#40;</p>
          ) : (
            <>
              <Player video={videoList[current]} />
              <Controls
                count={videoList.length}
                current={current}
                onItemChange={setCurrent}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SoundPage;
