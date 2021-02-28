import Layout from '../../components/Layout/Layout.jsx';
import { SoundUpload } from '../../components/Widgets/Widgets.js';

const soundPage = () => {
  return (
    <Layout checkauth menu>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 2xl:grid-cols-3">
        <SoundUpload />
      </div>
    </Layout>
  );
};

export default soundPage;
