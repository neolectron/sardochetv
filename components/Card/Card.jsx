const Card = ({
  children = null,
  text = null,
  title = null,
  className = '',
}) => (
  <div className={`p-4 bg-white rounded-md break-words w-max ${className}`}>
    {title && (
      <div className="pb-4 font-semibold text-lg text-center">{title}</div>
    )}
    {children || text}
  </div>
);

export default Card;
