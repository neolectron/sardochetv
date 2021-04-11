import Icon from '../Icon/Icon.jsx';

const Controls = ({ count = 0, current = 0, onItemChange = () => {} }) => (
  <div className="p-4 flex justify-center">
    <button
      disabled={current === 0}
      className={`mx-20 transform hover:scale-110 ${
        current === 0 ? 'text-gray-600' : ''
      }`}
      onClick={() => onItemChange(current - 1)}
    >
      <Icon name="left" height="1.5em" width="1.5em" />
    </button>
    <button
      disabled={current === count - 1}
      className={`mx-20 transform hover:scale-110 ${
        current === count - 1 ? 'text-gray-600' : ''
      }`}
      onClick={() => onItemChange(current + 1)}
    >
      <Icon name="right" height="1.5em" width="1.5em" />
    </button>
  </div>
);

export default Controls;
