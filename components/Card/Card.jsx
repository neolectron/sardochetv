const Card = ({
  children = null,
  text = null,
  title = null,
  className = '',
}) => (
  <div
    className={`p-4 bg-white shadow-2xl transition-transform transform break-words ${className}`}
  >
    {title && <div className="mb-4 text-xl font-bold">{title}</div>}
    {children || text}
  </div>
);

export default Card;
