import Icon from '../Icon/Icon.jsx';
import { btn, btnNormal, btnRev } from './button.module.css';

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

  return asAnchor ? (
    <a
      {...rest}
      className={`${btn} ${reversed ? btnRev : btnNormal} ${className}`}
    >
      {swaped || displayedIcon}
      {text || children}
      {swaped && displayedIcon}
    </a>
  ) : (
    <button
      {...rest}
      className={`${btn} ${reversed ? btnRev : btnNormal} ${className}`}
    >
      {swaped || displayedIcon}
      {text || children}
      {swaped && displayedIcon}
    </button>
  );
};

export default Button;
