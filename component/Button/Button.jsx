import Icon from '../Icon/Icon.jsx';
import styles from './button.module.css';

const Wrap = ({ asAnchor, children, ...rest }) =>
  asAnchor ? (
    <a {...rest}>{children}</a>
  ) : (
    <button {...rest}>{children}</button>
  );

const Button = ({
  icon = null,
  reversed = false,
  swaped,
  children = null,
  text = null,
  asAnchor,
  className = '',
  ...rest
}) => {
  const displayedIcon = icon ? (
    <Icon name={icon} height="1em" width="1em" className="mr-2" />
  ) : null;

  return (
    <Wrap
      asAnchor={asAnchor}
      className={`w-max flex items-center font-semibold rounded-full px-4 py-1 border cursor-pointer
      focus:outline-none transform transition-transform hover:scale-105 whitespace-nowrap ${
        reversed ? styles.button : styles['button-reversed']
      } ${className}`}
      {...rest}
    >
      {swaped || displayedIcon}
      {text || children}
      {swaped && displayedIcon}
    </Wrap>
  );
};

export default Button;
