/** 
 * @copyright 2024 codewithsadee 
 * @license Apache-2.0 
 */
import PropTypes from "prop-types";

/** 
 * Primary Button 
 */
const ButtonPrimary = ({ href, target = "_self", label, icon, classes, onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={`btn btn-primary flex items-center justify-center gap-2 px-5 py-2 ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded text-lg leading-none">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`btn btn-primary flex items-center justify-center gap-2 px-5 py-2 ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded text-lg leading-none">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

/** 
 * Outline Button 
 */
const ButtonOutline = ({ href, target = "_self", label, icon, classes, onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={`btn btn-outline flex items-center justify-center gap-2 px-5 py-2 ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded text-lg leading-none">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`btn btn-outline flex items-center justify-center gap-2 px-5 py-2 ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded text-lg leading-none">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export { ButtonPrimary, ButtonOutline };
