const Card = ({ children = null, text = null, className = '' }) => (
  <div
    className={`p-4 bg-white shadow-2xl transition-transform transform break-words ${className}`}
  >
    {children || text}
  </div>
);

export default Card;
