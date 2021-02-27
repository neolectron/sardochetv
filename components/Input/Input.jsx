import styles from './input.module.css';

const Input = ({ label = null, id, ...rest }) => (
  <div className="w-full font-sans">
    <div className="relative mb-4">
      <input
        id={id}
        placeholder={label}
        className={`w-full px-2 pt-3 pb-1 border-b border-gray-400 rounded outline-none focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 ${styles.input}`}
        {...rest}
      />
      {label && (
        <label
          htmlFor={id}
          className={`absolute pointer-events-none pl-3 text-base text-gray-400 leading-tighter cursor-text ${styles.label}`}
        >
          {label}
        </label>
      )}
    </div>
  </div>
);

export default Input;
