import styles from '../styles/Galeria.module.css'
import Header from '@/components/Headers';
import ImageCarousel from '../components/carousel'


const Gallery = () => {
    return (
        
        <main className={styles.main}>
        <Header></Header>

        <h1 className={styles.title}>Galeria</h1>
        
        <p className={styles.centro}>Bienvenido a nuestra galería de platillos deliciosos y eventos especiales. Preparamos arracheras, tacos, ensaladas y más con los mejores ingredientes y pasión. Desde pequeñas reuniones hasta grandes eventos, haremos de tu ocasión algo especial y único. ¡Contáctanos para probar nuestros platillos!
        </p>
        
        <ImageCarousel className={styles.Carousel}></ImageCarousel>


        </main> );
}
 
export default Gallery;