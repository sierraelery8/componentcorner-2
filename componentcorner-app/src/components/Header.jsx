import './Header.css';

function Header({ storeName }) {
  return (
    <header>
      <h1>{storeName}</h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;