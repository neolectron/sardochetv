const Card = ({ children, text, className = '' }) => (
  <div className={`p-4 bg-white rounded-md ${className}`}>
    {children || text}
  </div>
);

export default Card;
