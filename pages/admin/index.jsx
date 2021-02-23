import Layout from '../../components/Layout/Layout.jsx';
import Button from '../../components/Button/Button.jsx';

import { signIn, signOut, useSession } from 'next-auth/client';

const adminPage = ({ adminList }) => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <Layout>
        <Button icon="twitch" onClick={() => signIn('twitch')} text="Login !" />
      </Layout>
    );
  }

  return (
    <Layout>
      You are logged-in.
      <Button icon="twitch" onClick={() => signOut('twitch')} text="Logout !" />
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: { adminList: ['sardoche'] } };
}

export default adminPage;
