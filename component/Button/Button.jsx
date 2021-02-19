import Icon from '../Icon/Icon.jsx';

const Wrap = ({ asAnchor, children, ...rest }) =>
  asAnchor ? (
    <a {...rest}>{children}</a>
  ) : (
    <button {...rest}>{children}</button>
  );

const Button = ({
  icon = null,
  reversed,
  swaped,
  children = null,
  text = null,
  asAnchor,
  className = '',
  ...rest
}) => {
  return (
    <Wrap
      asAnchor={asAnchor}
      className={`w-max flex font-semibold rounded-full px-4 py-1 border border-purple-600 
      cursor-pointer focus:outline-none text-purple-600
      transform transition-transform hover:scale-105 hover:text-white hover:bg-purple-600
      ${className}`}
      {...rest}
    >
      {swaped || (icon && <Icon reversed={reversed} name={icon} />)}
      {text || children}
      {swaped && icon && <Icon reversed={reversed} name={icon} />}
    </Wrap>
  );
};

export default Button;
