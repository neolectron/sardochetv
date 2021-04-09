const Progress = ({ value = 0, valueBuffer = 0, max = 100 }) => (
  <div className="relative">
    <div
      className="absolute top-0 bg-gray-700 h-1"
      style={{ width: `${(100 * valueBuffer) / max}%` }}
    ></div>
    <div
      className="absolute top-0 bg-orange h-1"
      style={{ width: `${(100 * value) / max}%` }}
    ></div>
  </div>
);

export default Progress;
