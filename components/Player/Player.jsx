/* eslint-disable jsx-a11y/media-has-caption */
import Youtube from '../Youtube/Youtube.jsx';
import Progress from '../Progress/Progress.jsx';
import { useAudio } from 'react-use';
import { useState } from 'react';

const getBufferedValue = (audioRef) => {
  if (!audioRef?.buffered || audioRef.buffered.length === 0) return 0;
  return audioRef.buffered.end(audioRef.buffered.length - 1);
};

const Player = ({ video }) => {
  const [audio, state, controls, ref] = useAudio({
    src: `${process.env.NEXT_PUBLIC_API_URL}/data/${video.videoId}.flac`,
    preload: 'metadata',
    className: 'w-full border-black border-2',
  });

  // Due to a Chrome bug, sometimes the onloadedmetadata event isn't fired.
  // Resulting in "duration" and "buffered" beeing 0/undefined.
  const [duration, setDuration] = useState(state.duration || 0);

  const handleYoutubeStateChange = ({ target }) => {
    if (!ref.current) return;

    ref.current.currentTime = target.getCurrentTime();
    // this is the fix.
    if (!state.duration) setDuration(target.getDuration());
  };

  return (
    <div className="flex flex-col p-4 bg-black bg-blur bg-opacity-60 text-white">
      <div className="text-xl font-bold ">{video.title}</div>
      <Youtube
        className="mt-2"
        videoId={video.videoId}
        opts={{ playerVars: { mute: 1 } }}
        onStateChange={handleYoutubeStateChange}
        onPlay={controls.play}
        onPause={controls.pause}
        onEnd={controls.pause}
      />
      {audio}
      <Progress
        max={duration}
        value={state.time}
        valueBuffer={getBufferedValue(ref.current)}
      />
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
};

export default Player;
