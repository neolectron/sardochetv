import Menu from '../Menu/Menu.jsx';
import Link from 'next/link';
import Icon from '../Icon/Icon.jsx';

const Layout = ({ menu = false, children, className = '', ...rest }) => (
  <div className="w-full h-full flex flex-col md:flex-row">
    {menu && (
      <Menu {...rest}>
        <Link href="/admin/addons">
          <a className="h-14 p-4 pl-10 flex items-center transform transition-transform origin-left border-l-8 border-transparent  hover:border-orange hover:bg-yellow-100 hover:scale-110">
            <Icon name="addon" height="1.5em" className="mr-5" />
            Sardalert
          </a>
        </Link>
        <Link href="/admin/sound">
          <a className="h-14 p-4 pl-10 flex items-center transform transition-transform origin-left border-l-8 border-transparent hover:border-orange hover:bg-yellow-100 hover:scale-110">
            <Icon name="soundwave" height="1.5em" className="mr-5" />
            Sardsound
          </a>
        </Link>
        <Link href="/admin/bots">
          <a className="h-14 p-4 pl-10 flex items-center transform transition-transform origin-left border-l-8 border-transparent hover:border-orange hover:bg-yellow-100 hover:scale-110">
            <Icon name="bot" height="1.5em" className="mr-5" />
            Sardbot
          </a>
        </Link>
      </Menu>
    )}
    <main className={`flex-grow h-full flex flex-col ${className}`}>
      {children}
    </main>
  </div>
);

export default Layout;
