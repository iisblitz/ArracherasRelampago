import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav>
        <ul>
        <li><Link className={router.pathname === '/' ? 'active' : ''} href="/"> Logo placeholder</Link></li>
        <li><Link className={router.pathname === '/Menu' ? 'active' : ''} href="/Menu">Menu</Link></li>
        <li><Link className={router.pathname === '/galeria' ? 'active' : ''} href="/galeria">Galeria</Link></li>
        <li><Link className={router.pathname === '/sobre nosotros' ? 'active' : ''} href="/nosotros">Sobre Nosotros</Link></li>
        <li><Link className={router.pathname === '/contactanos' ? 'active' : ''} href="/contactanos">Contactanos</Link></li>
        <li><Link className={router.pathname === '/calendario' ? 'active' : ''} href="/calendario">Calendario</Link></li>
        </ul>
      </nav>
      <button onClick={toggleMenu}>Menu</button>
      {isMenuOpen && (
        <nav className="mobile-menu">
        <ul>
        <li><Link className={router.pathname === '/' ? 'active' : ''} href="/"> Logo placeholder</Link></li>
        <li><Link className={router.pathname === '/Menu' ? 'active' : ''} href="/Menu">Menu</Link></li>
        <li><Link className={router.pathname === '/galeria' ? 'active' : ''} href="/galeria">Galeria</Link></li>
        <li><Link className={router.pathname === '/sobre nosotros' ? 'active' : ''} href="/nosotros">Sobre Nosotros</Link></li>
        <li><Link className={router.pathname === '/contactanos' ? 'active' : ''} href="/contactanos">Contactanos</Link></li>
        <li><Link className={router.pathname === '/calendario' ? 'active' : ''} href="/calendario">Calendario</Link></li>
        </ul>
        </nav>
      )}
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #333;
          color: yellow;
          padding: 10px;
        }

        nav ul {
          list-style: none;
          display: flex;
        }

        nav li {
          margin-right: 20px;
        }

        nav span {
          color: yellow;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }

        nav span.active {
          text-decoration: underline;
        }

        button {
          display: none;
        }

        @media (max-width: 768px) {
          nav ul {
            flex-direction: column;
            align-items: center;
          }

          nav li {
            margin-right: 0;
            margin-bottom: 10px;
          }

          button {
            display: block;
          }

          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
