import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import logo from '../resources/imagenes/logo.png'
import Image from 'next/image';

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav>
      <Link className={router.pathname === '/' ? 'active' : ''} href="/"> <Image src={logo} height={50} width={50} alt='logo'></Image></Link>
        <div className="space"/>
        <ul>
        <li><Link className={router.pathname === '/menu' ? 'active' : ''} href="/menu">Menu</Link></li>
        <li><Link className={router.pathname === '/galeria' ? 'active' : ''} href="/galeria">Galeria</Link></li>
        <li><Link className={router.pathname === '/sobre nosotros' ? 'active' : ''} href="/aboutus">Sobre Nosotros</Link></li>
        <li><Link className={router.pathname === '/contactanos' ? 'active' : ''} href="/contactus">Contactanos</Link></li>
        <li><Link className={router.pathname === '/calendario' ? 'active' : ''} href="/calendar">Calendario</Link></li>
        </ul>
      </nav>
      <button onClick={toggleMenu}>Menu</button>
      {isMenuOpen && (
        <nav className="mobile-menu">
       <Link className={router.pathname === '/' ? 'active' : ''} href="/"> Logo placeholder</Link>
        <ul>
        <li><Button><Link className={router.pathname === '/menu' ? 'active' : ''} href="/menu">Menu</Link></Button></li>
        <li><Button><Link className={router.pathname === '/galeria' ? 'active' : ''} href="/galeria">Galeria</Link></Button></li>
        <li><Button><Link className={router.pathname === '/sobre nosotros' ? 'active' : ''} href="/aboutus">Sobre Nosotros</Link></Button></li>
        <li><Button><Link className={router.pathname === '/contactanos' ? 'active' : ''} href="/contactus">Contactanos</Link></Button></li>
        <li><Button><Link className={router.pathname === '/calendario' ? 'active' : ''} href="/calendar">Calendario</Link></Button></li>
        </ul>
        </nav>
      )}
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: #333;
          color: yellow;
          padding: 10px;
        }

        nav{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        nav ul {
          display: flex;
          flex-direction: row;
          align-items: center;
          color:yellow;
          left: auto;
          text-align:center;
          background-color:black; 
        }
        

        nav li {
          display:flex;
          margin-inline: 1rem;
          align-items: center;
          text-align: center;
        }

        nav span {
          color: yellow;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }

        nav button{
          text-align: center
        }

        nav a{
          text-align: center
        }

        nav span.active {
          text-decoration: underline;
        }


        button {
          display: none;
          border-color: yellow;
        }

        button:hover {
          background: rgba(var(--card-rgb), 0.1);
          border: 1px solid rgba(var(--card-border-rgb), 0.15);
        }

        .space{
          width:80vw;
        }

        @media (max-width: 768px) {
          nav ul {
            flex-direction: column;
            align-items: center;
          }

          nav li {
            margin-right: 0;
            margin-bottom: 10px;
            align-items:center;
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
