import '../styles/header.css';

function Header({ children, title }) {
  return (
    <>
      <div className="header">
        {title}
        {children}
      </div>
      <div></div>
    </>
  );
}
export default Header;
