import Menu from '../Menu/Menu.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Button from '../Button/Button.jsx';
import { useSession, signIn } from 'next-auth/client';

const Layout = ({
  menu = false,
  checkauth = false,
  children,
  className = '',
}) => {
  const [session, loading] = useSession();

  if (checkauth && loading) {
    return (
      <main className="flex items-center justify-center w-full h-full">
        <Spinner
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </main>
    );
  }

  if (checkauth && !session?.user) {
    return (
      <main className="flex items-center justify-center w-full h-full">
        <Button
          reversed
          icon="twitch"
          onClick={() => signIn('twitch')}
          text="Login !"
        />
      </main>
    );
  }

  return (
    <div className="flex flex-col w-full h-full md:flex-row">
      {menu && (
        <Menu user={session?.user}>
          <Menu.Item href="/admin/addons" icon="addon" text="Sardalert" />
          <Menu.Item href="/admin/sound" icon="soundwave" text="Sardsound" />
          <Menu.Item href="/admin/bots" icon="bot" text="Sardbot" />
        </Menu>
      )}
      <main
        className={`flex-1 flex-shrink-0 flex flex-col overflow-y-auto ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
