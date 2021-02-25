import Menu from '../Menu/Menu.jsx';

const Layout = ({ menu = false, children, className = '', ...rest }) => (
  <div className="w-full h-full flex flex-col md:flex-row">
    {menu && (
      <Menu {...rest}>
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

export default Layout;
