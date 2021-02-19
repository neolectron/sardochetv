const Layout = ({ children, className = '' }) => (
  <>
    <main className={`h-full flex flex-col ${className}`}>{children}</main>
  </>
);

export default Layout;
