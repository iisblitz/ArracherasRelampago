import Header from "@/components/Headers";
import styles from '../styles/Menu.module.css'

const Menu = () => {
    return ( <div>
<Header></Header>

<main className={styles.main}>
    <h1 className={styles.title}> Menu </h1>   
        <div className={styles.centro}> 

¡Bienvenidos a nuestro menú en línea! En Arracheras Relámpago, ofrecemos una amplia variedad de platillos deliciosos para satisfacer todos los gustos. A continuación, te presentamos nuestro menú completo con los precios correspondientes:<br/>

<h2>Alambres:</h2><br/>
Alambre Sirloin: $186.56 <br/>
Alambre Bisteck: $193.91 <br/>
Alambre Arrachera: $190.46 <br/>
<br/>

<h2>Burritos:</h2><br/>

Burritos Arrachera: $77.45 <br/>
Burritos Bisteck: $64.79<br/>
Burritos Sirloin: $61.85<br/>
<br/>
<h2>Chilli Dog:</h2><br/>

Chilli Dog: $96.48<br/>
Arrachera Dog: $49.43<br/>
<br/>
<h2>Chapatas:</h2><br/>

Chapatas Bisteck: $125.86<br/>
Chapatas Sirloin: $122.43<br/>
Chapatas Arrachera: $124.25<br/>
Chapatas Mix: $126.92<br/>
<br/>
<h2>Ensaladas:</h2><br/>

Ensaladas Mixta: $48.54<br/>
Ensaladas Arrachera: $62.60<br/>
Ensaladas Vegana: $37.01<br/>
Ensaladas Pokebowl: $73.41<br/>
<br/>
<h2>Paquetes</h2><br/>
Paquete Personal: $137.03<br/>
Paquete Básico: $250.00<br/>
Paquete Grande: $370.97<br/>
Paquete Familiar: $699.22<br/>
<br/>
<h2>Tacos</h2><br/>
Tacos Chistorra: $111.57<br/>
Tacos Chorizo: $119.37<br/>
Tacos Longaniza: $119.37<br/>
Tacos Arrachera: $101.33<br/>
Tacos Bisteck: $104.78<br/>
<br/>
<h2>Papa</h2><br/>
Papa Antojo: $50.90<br/>
Papa Llenadora: $80.15<br/>
Papa Tragón: $153.27<br/>
Papa Cochinita: $33.53<br/>
<br/>
<h2>Otros platillos:</h2><br/>
Frijoles Charros: $34.80<br/>
Costilla 250 gr: $69.88<br/>
Costilla 500 gr: $139.75<br/>
Costilla 1000 gr: $279.50<br/>
Cochinita Medio Kg: $141.41<br/>
Papa con Cochinita: $172.92<br/>
Burrito Cochinita: $156.53<br/>
Básica Premium: $294.49<br/>
Familiar Premium: $1066.47<br/>
Empalme: $44.79<br/>
Orden Empalme (3): $106.76<br/><br/><br/>


<h6>¡Gracias por elegir Arracheras Relámpago para tus comidas! No dudes en contactarnos si tienes alguna pregunta o si te gustaría hacer un pedido. Estamos aquí para ayudarte a disfrutar de una experiencia gastronómica única y deliciosa.</h6>
            
        </div>
    </main>
</div> );
}
 
export default Menu;