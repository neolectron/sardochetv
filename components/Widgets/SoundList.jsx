import Widget from '../../components/Widget/Widget.jsx';
import useApi from '../../hooks/useApi.js';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const plural = (quantity) => (quantity > 1 ? 's' : '');

const SoundList = () => {
  const [{ loading, error, value }, fetchApi] = useApi({
    onError: (e) => toast(e?.message || 'unknown error ¯\\_(ツ)_/¯'),
  });

  const refreshList = () => fetchApi('/sound');
  const deleteConfirm = async (fileID) => {
    await fetchApi(`/sound/${fileID}`, { method: 'DELETE' });
    refreshList();
  };

  useEffect(refreshList, []);

  return (
    <Widget
      title="Fichiers audio"
      loading={loading && 'Téléchargement de la liste'}
      error={error}
    >
      <div className="flex w-full mt-6">
        <div>
          {value?.length || '0'} fichier{plural(value?.length)} disponible
          {plural(value?.length)} :
        </div>
        <div className="flex justify-end flex-grow overflow-hidden">
          <button
            className="ml-auto text-blue-600 transform transform-scale hover:scale-110"
            onClick={() => fetchApi('/sound')}
          >
            Rafraichir la liste !
          </button>
        </div>
      </div>
      {value?.length > 0 && (
        <div className="flex-grow mt-2">
          <div className="border border-white rounded-sm border-opacity-30">
            {value.map((id) => (
              <div key={id} className="flex flex-wrap p-2 bg-alternate">
                <div className="flex-1 truncate">{id}.flac</div>
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  className="px-2 text-blue-600 transform transform-scale hover:scale-110"
                >
                  YouTube
                </a>
                <a
                  href={`/asmr/${id}`}
                  target="_blank"
                  className="px-2 text-blue-600 transform transform-scale hover:scale-110"
                >
                  ASMR
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_API_URL}/data/${id}.flac`}
                  target="_blank"
                  className="px-2 text-blue-600 transform transform-scale hover:scale-110"
                >
                  Fichier
                </a>
                <button
                  className="transform transform-scale hover:scale-110"
                  onClick={() => deleteConfirm(id)}
                >
                  🗑
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </Widget>
  );
};

export default SoundList;
