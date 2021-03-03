import Layout from '../components/Layout/Layout.jsx';
import Link from 'next/link';
import Player from '../components/Player/Player.jsx';
import Playlist from '../components/Playlist/Playlist.jsx';
import { useState } from 'react';

const SoundPage = ({ videoList }) => {
  const [current, setCurrent] = useState(0);
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
        <div className="flex items-center justify-center flex-grow">
          <Player video={videoList[current]} />
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
