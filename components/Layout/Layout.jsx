import Menu from '../Menu/Menu.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Button from '../Button/Button.jsx';
import { useSession, signIn } from 'next-auth/client';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

const Layout = ({
  menu = false,
  checkauth = false,
  children,
  className = '',
  menuItems = null,
}) => {
  const [session, loading] = useSession();
  const router = useRouter();

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
      <main className="flex flex-col items-center justify-center w-full h-full">
        {router.query?.error ? (
          <div className="text-red-400 font-bold rounded-md m-4 p-4 bg-black bg-opacity-30">
            {router.query.error}
          </div>
        ) : null}
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
    <div className="relative flex flex-col w-full h-full md:flex-row">
      {menu && (
        <Menu user={session?.user}>
          {menuItems && menuItems}
          {!menuItems && checkauth && (
            <>
              <Menu.Item href="/admin/addons" icon="addon" text="Sardalert" />
              <Menu.Item
                href="/admin/sound"
                icon="soundwave"
                text="Sardsound"
              />
              <Menu.Item href="/admin/bots" icon="bot" text="Sardbot" />
            </>
          )}
        </Menu>
      )}
      <main
        className={`relative flex-1 flex-shrink-0 flex flex-col overflow-y-auto ${className}`}
      >
        {children}
      </main>
      <div className="absolute top-10 right-10">
        <ToastContainer progressClassName="bg-orange" />
      </div>
    </div>
  );
};

export default Layout;
