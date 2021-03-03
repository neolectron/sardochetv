import Button from '../Button/Button';

const Playlist = ({ list = [], onItemChange }) => (
  <div className="flex flex-col h-full p-4 bg-green-300">
    <div className="flex">
      <Button
        icon="firefox"
        text="GO PREV !"
        onClick={() => onItemChange((val) => val - 1)}
      />
      <Button
        icon="chrome"
        text="GO NEXT !"
        onClick={() => onItemChange((val) => val + 1)}
      />
    </div>
    {list.map((video) => (
      <div key={video.videoId} className="flex my-2 font-bold bg-white">
        {video.title}
      </div>
    ))}
  </div>
);

export default Playlist;
