import Header from "@/components/Headers";
import styles from '../styles/contact.module.css'

const contact = () => {
    return ( <div>
        <Header/>

        <main className={styles.main}>

            <h2 className={styles.title}>¡Gracias por tu interés en contactar con nosotros!</h2>
        
            <div className={styles.centro}>
        En Arracheras Relámpago valoramos la comunicación con nuestros clientes. Si tienes alguna pregunta, comentario o simplemente quieres saludarnos, puedes encontrarnos en las siguientes plataformas:
        <br/><br/>
        Facebook: https://www.facebook.com/ArracherasRelampago
        <br/><br/>
        Instagram: https://www.instagram.com/arracheras.relampago/
        <br/><br/>
        WhatsApp: 5514515527
        <br/><br/>
        Correo electrónico: arracheras.relampago@gmail.com
        <br/><br/>
        No dudes en contactarnos a través de cualquiera de estas vías. Estamos aquí para ayudarte y brindarte la mejor experiencia posible en todo momento. ¡Gracias por elegir Arracheras Relámpago!
        
        </div>
        </main>
        </div> );
}
 
export default contact;