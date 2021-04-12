const Playlist = ({ list = [], onItemChange }) => (
  <div className="flex flex-col">
    {list.map((video, index) => (
      <div
        key={video.videoId}
        className="flex p-4 transition-transform transform hover:scale-110 cursor-pointer"
        onClick={() => onItemChange(index)}
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
