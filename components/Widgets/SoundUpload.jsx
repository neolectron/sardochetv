import Button from '../../components/Button/Button.jsx';
import Widget from '../../components/Widget/Widget.jsx';
import Input from '../../components/Input/Input.jsx';
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
    <Widget
      title="Envoyer un fichier audio"
      loading={loading && 'Envoi en cours'}
      error={error}
    >
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <Input required type="url" name="youtubeInput" label="Youtube URL" />
        <Input required type="file" name="audioInput" accept="audio/flac" />
        <Button text="Upload !" type="submit" className="self-center" />
      </form>
    </Widget>
  );
};

export default SoundUpload;
