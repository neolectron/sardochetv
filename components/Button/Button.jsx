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

  const content = (
    <>
      {swaped || displayedIcon}
      {text || children}
      {swaped && displayedIcon}
    </>
  );

  const computedClasses = `${btn} ${
    reversed ? btnRev : btnNormal
  } ${className}`;

  return asAnchor ? (
    <a {...rest} className={computedClasses}>
      {content}
    </a>
  ) : (
    <button {...rest} className={computedClasses}>
      {content}
    </button>
  );
};

export default Button;
