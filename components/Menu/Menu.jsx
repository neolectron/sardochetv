import { useRef, useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useClickAway } from 'react-use';
import { signOut } from 'next-auth/client';

const Menu = ({ children = null, user = null }) => {
  const menuRef = useRef(null);

  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useClickAway(menuRef, close);
  const openedClass = open ? 'block' : 'hidden';

  return (
    <nav
      ref={menuRef}
      className={`bg-white w-full flex flex-col justify-between md:w-80 md:h-full`}
    >
      <button
        onClick={() => setOpen((x) => !x)}
        className="md:hidden h-14 pl-2 focus:outline-none"
      >
        <Icon name="burger" height="32px" />
      </button>
      <div
        className={`h-full flex flex-col justify-between font-semibold text-xl overflow-hidden text-gray-900 md:flex ${openedClass}`}
      >
        <div className="flex flex-col">
          <div
            className="h-28 bg-cover flex justify-center items-center"
            style={{ backgroundImage: 'url("/bg.png")' }}
          >
            <img src="/tasse.png" className="h-12 mr-4" alt="logo brand" />
            <p className="text-white font-bold text-2xl text-shadow select-none">
              Sardoche.tv
            </p>
          </div>
          {children}
        </div>
        {user && (
          <div className="h-14 p-2 border-t border-gray-300 flex items-center">
            <img
              src={user.image}
              alt="Image d'avatar"
              className="h-full mr-4 rounded"
            />
            <p className="truncate" title={user.name}>
              {user.name}
            </p>
            <Button
              onClick={() => signOut('twitch')}
              icon="logout"
              text="Logout"
              className="text-sm ml-auto"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

const Item = ({ href, icon, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={`h-14 p-4 pl-10 flex items-center transform transition-transform
        origin-left border-l-8 border-transparent hover:border-orange hover:bg-yellow-100 hover:scale-110 ${
          href === asPath ? 'border-orange' : ''
        }`}
      >
        <Icon name={icon} height="1.5em" className="mr-5" />
        {text}
      </a>
    </Link>
  );
};
Menu.Item = Item;

export { Menu as default, Item };
