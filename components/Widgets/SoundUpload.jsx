import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import Input from '../../components/Input/Input.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';
import useApi from '../../hooks/useApi.js';
import { toast } from 'react-toastify';

const SoundUpload = () => {
  const [{ loading, error }, fetchApi] = useApi({
    onSuccess: () => toast('Upload success'),
    onError: (e) => toast(e?.message || 'unknown error ¯\\_(ツ)_/¯'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = new FormData(e.target);
    fetchApi('/sound', {
      method: 'POST',
      body,
    });
  };

  return (
    <Card
      title="Upload audio widget"
      className={`relative bg-white ${
        error ? 'border-l-8 border-red-600' : ''
      } `}
    >
      {error && (
        <div className="my-2 font-bold text-red-600 text-2x">
          {error.message}
        </div>
      )}
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <Input required type="url" name="youtubeInput" label="Youtube URL" />
        <Input required type="file" name="audioInput" accept="audio/flac" />
        <Button text="Upload !" type="submit" className="self-center" />
      </form>
      {loading && (
        <div
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-75"
          style={{ backdropFilter: `blur(3px)` }}
        >
          <Spinner type="Bars" color="#ff9e3b" height={80} width={80} />
          <div className="text-2xl font-bold text-white">
            Upload in progress . . .
          </div>
        </div>
      )}
    </Card>
  );
};

export default SoundUpload;
