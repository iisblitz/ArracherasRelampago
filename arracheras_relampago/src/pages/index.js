import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '@/components/headers'
import aboutus from '../resources/imagenes/aboutus.jpg'
import calendar from '../resources/imagenes/calendar.jpeg'
import contact from '../resources/imagenes/contact.png'
import menu from '../resources/imagenes/menu.jpg'
import gallery from '../resources/imagenes/gallery.jpg'
import logo from '../resources/imagenes/logo.png'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arracheras Relampago | Home</title>
        <meta name="description" content="Bienvenido a Arracheras Relampago!." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        

        <h1 className={styles.title}>
         Bienvenido a Arracheras Relampago!
        </h1>

        <div className={styles.centro}>
        <p className={styles.description}>
        Arracheras Relámpago es un restaurante especializado en carne asada estilo norteño que ofrece la mejor calidad en cortes, adobos y marinados. Además de las arracheras, ofrecen una variedad de platillos y bebidas. El sitio web ofrece información sobre el menú, ubicaciones, reservas y eventos especiales.
        </p>

        <Image
        src={logo}
        alt= 'logo'
        className='logo'
        >
        </Image>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Menu</h2>
            <Image
              src={menu}
              alt="Our Menu"
              width={150}
              height={150}
            />
            <p>Echale un vistazo a nuestros platillos!!</p>
            <a href="/menu">Ver Menu</a>
          </div>

          <div className={styles.card}>
            <h2>Galeria</h2>
            <Image
              src={gallery}
              alt="Galeria"
              width={150}
              height={150}
            />
            <p>Estas son las fotos de nuestros platillos y eventos</p>
            <a href="/location">Ver galeria</a>
          </div>

          <div className={styles.card}>
            <h2>Nosotros</h2>
            <Image
              src={aboutus}
              alt="Sobre Nosotros"
              width={150}
              height={150}
            />
            <p>Esta es nuestra historia!</p>
            <a href="/aboutus">Ver sobre nosotros</a>
          </div>

          <div className={styles.card}>
            <h2>Contactanos</h2>
            <Image
              src={contact}
              alt="Contactanos"
              width={150}
              height={150}
            />
            <p>Información de contacto</p>
            <a href="/contactus">Buscanos!</a>
          </div>

          <div className={styles.card}>
            <h2>Calendario</h2>
            <Image
              src={calendar}
              alt="Calendario"
              width={150}
              height={150}
            />
            <p>Herramienta para calendarizar eventos</p>
            <a href="/calendar">Agendanos!</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Arracheras Relampago.</p>
      </footer>
    </div>
  )
}
