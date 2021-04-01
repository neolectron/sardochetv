import Layout from '../../components/Layout/Layout.jsx';
import { SoundUpload, SoundList } from '../../components/Widgets/Widgets.js';

const soundPage = () => {
  return (
    <Layout checkauth menu className="md:p-8">
      <div className="flex flex-wrap content-start flex-grow">
        <div className="w-full p-4 h-72 lg:w-1/2 2xl:w-1/3">
          <SoundUpload />
        </div>
        <div className="w-full p-4 h-72 lg:w-1/2 2xl:w-1/3">
          <SoundList />
        </div>
      </div>
    </Layout>
  );
};

export default soundPage;
