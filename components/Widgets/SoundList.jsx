import Button from '../../components/Button/Button.jsx';
import Widget from '../../components/Widget/Widget.jsx';
import useApi from '../../hooks/useApi.js';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const plural = (quantity) => (quantity > 1 ? 's' : '');

const SoundList = () => {
  const [{ loading, error, value }, fetchApi] = useApi({
    onError: (e) => toast(e?.message || 'unknown error ¯\\_(ツ)_/¯'),
  });

  useEffect(() => {
    fetchApi('/sound');
  }, []);

  return (
    <Widget
      title="Liste des fichiers audio"
      loading={loading && 'Téléchargement de la liste'}
      error={error}
    >
      <Button
        text="Rafraichir la liste !"
        className="self-center m-4"
        onClick={() => fetchApi('/sound')}
      />
      <div>
        {value?.length || '0'} fichier{plural(value?.length)} disponible
        {plural(value?.length)} :
      </div>
      <div className="flex-grow">
        {value?.length &&
          value.map((id) => (
            <div key={id} className="flex flex-wrap gap-4">
              -
              <a
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                className="text-blue-600"
              >
                YouTube
              </a>
              <a href={`/asmr/${id}`} target="_blank" className="text-blue-600">
                ASMR
              </a>
            </div>
          ))}
      </div>
    </Widget>
  );
};

export default SoundList;
