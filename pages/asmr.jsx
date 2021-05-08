import Layout from '../components/Layout/Layout.jsx';
import Link from 'next/link';
import Player from '../components/Player/Player.jsx';
import Playlist from '../components/Playlist/Playlist.jsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Controls from '../components/Controls/Controls.jsx';

const SoundPage = ({ videoList }) => {
  const { query, push } = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!query.video) return;

    const index = videoList.findIndex((el) => el.videoId === query.video);
    if (index < 0) {
      push(`/asmr?video=${videoList[0].videoId}`);
    } else {
      setCurrent(index);
    }
  }, [query]);

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

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sound`);
  const idList = await res.json();
  const fetchAllData = idList.map((id) =>
    fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    )
      .then((res) => res.json())
      .then((json) => ({ ...json, videoId: id }))
  );

  const videoList = await Promise.all(fetchAllData);

  return { props: { videoList: videoList } };
}
