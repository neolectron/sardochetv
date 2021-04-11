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

  return (
    <Layout>
      <div className="flex h-12 m-2">
        <Link href="/">
          <a className="inline-block h-full">
            <img
              src="/sardoche.png"
              alt="logotype sardoche"
              className="h-full"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-grow">
        <div className="hidden w-64 lg:block">
          <Playlist list={videoList} onItemChange={setCurrent} />
        </div>
        <div className="flex items-center justify-center flex-grow ">
          <div className="bg-black bg-blur bg-opacity-60 text-white">
            {videoList.length === 0 ? (
              <p className="text-white text-xl">
                Pas de vidéos pour le moment :&#40;
              </p>
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
