/* eslint-disable jsx-a11y/media-has-caption */
import Youtube from '../Youtube/Youtube.jsx';
import { useAudio } from 'react-use';


const Player = ({ video }) => {
  const [audio, , controls, ref] = useAudio({
    src: `http://localhost:8080/${video.videoId}.flac`,
    preload: 'metadata',
    className: 'w-full border-black border-2',
  });

  const updateAudioTimer = ({ target }) => {
    if (!ref.current) return;
    ref.current.currentTime = target.getCurrentTime();
  };

  return (
    <div className="flex flex-col p-4 bg-white ">
      <div className="text-xl font-bold ">{video.title}</div>
      <Youtube
        className="mt-2"
        videoId={video.videoId}
        opts={{ playerVars: { mute: 1 } }}
        onStateChange={updateAudioTimer}
        onPlay={controls.play}
        onPause={controls.pause}
        onEnd={controls.pause}
      />
      {audio}
    </div>
  );
};

export default Player;
