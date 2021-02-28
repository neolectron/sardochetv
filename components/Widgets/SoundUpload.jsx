import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import Input from '../../components/Input/Input.jsx';

const SoundUpload = ({}) => {
  return (
    <Card title="Upload audio widget" className="bg-white">
      <form
        encType="multipart/form-data"
        onSubmit={() => null}
        className="flex flex-col gap-4"
      >
        <Input type="url" name="youtubeInput" label="Youtube URL" />
        <Input type="file" name="audioInput" accept="audio/flac" />
        <Button text="Upload !" type="submit" className="self-center" />
      </form>
    </Card>
  );
};

export default SoundUpload;
