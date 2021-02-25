import Layout from '../../components/Layout/Layout.jsx';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import { signIn, useSession } from 'next-auth/client';

const soundPage = ({ adminList }) => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <Layout className="items-center justify-center">
        <Button
          reversed
          icon="twitch"
          onClick={() => signIn('twitch')}
          text="Login !"
        />
      </Layout>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const [audioInput] = elements;
    console.log(audioInput);
    // TODO:// FETCH api.
  };

  return (
    <Layout
      menu
      user={session.user}
      // className="p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
      className="p-4"
    >
      <div className="prout">
        <Card title="Upload audio widget" className="bg-white">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="file" name="audioInput" accept="audio/flac" />
            <Button text="Upload !" type="submit" className="self-center" />
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: { adminList: ['sardoche'] } };
}

export default soundPage;
