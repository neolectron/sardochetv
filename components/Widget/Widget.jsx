import Spinner from '../Spinner/Spinner.jsx';

const Widget = ({ title, loading, error, children }) => (
  <div className="flex flex-col h-full p-4 text-white break-words bg-black shadow-2xl bg-blur bg-opacity-60">
    {title && <div className="text-xl font-bold">{title}</div>}
    {error && (
      <div className="my-2 font-bold text-red-600 text-2x">{error.message}</div>
    )}
    <div className="relative flex flex-col flex-grow overflow-y-auto">
      {children}
    </div>
    {loading && (
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-75 bg-blur">
        <Spinner type="Bars" color="#ff9e3b" height={80} width={80} />
        <div className="text-2xl font-bold text-white">{loading}</div>
      </div>
    )}
  </div>
);

export default Widget;
