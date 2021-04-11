const Playlist = ({ list = [], onItemChange }) => (
  <div className="flex flex-col h-full">
    {list.map((video) => (
      <div
        key={video.videoId}
        className="flex p-2  text-white transition-transform transform hover:scale-110"
        onClick={() => onItemChange(video.videoId)}
      >
        <img
          src={video.thumbnail_url}
          height={video.thumbnail_height}
          width={video.thumbnail_width}
          className="object-cover w-20 h-20"
          alt="video thumnail"
        />
        <div className="pl-4 text-sm">{video.title}</div>
      </div>
    ))}
  </div>
);

export default Playlist;
