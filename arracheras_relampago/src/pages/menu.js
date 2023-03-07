import Header from "@/components/Headers";
import styles from '../styles/Home.module.css'

const Menu = () => {
    return ( <div>
<Header></Header>

<main className={styles.main}>
    <h1 className={styles.title}> Menu </h1>   
        <div className={styles.centro}> 
            <p className={styles.description}>
¡Bienvenidos a nuestro menú en línea! En Arracheras Relámpago, ofrecemos una amplia variedad de platillos deliciosos para satisfacer todos los gustos. A continuación, te presentamos nuestro menú completo con los precios correspondientes:

<h2>
Alambres:
</h2>
Alambre Sirloin: $186.56
Alambre Bisteck: $193.91
Alambre Arrachera: $190.46

Burritos:

Burritos Arrachera: $77.45
Burritos Bisteck: $64.79
Burritos Sirloin: $61.85

Chilli Dog:

Chilli Dog: $96.48
Chapatas:

Chapatas Bisteck: $125.86
Chapatas Sirloin: $122.43
Chapatas Arrachera: $124.25
Chapatas Mix: $126.92

Ensaladas:

Ensaladas Mixta: $48.54
Ensaladas Arrachera: $62.60
Ensaladas Vegana: $37.01
Ensaladas Pokebowl: $73.41

Otros platillos:

Frijoles Charros: $34.80
Paquete Personal: $137.03
Paquete Básico: $250.00
Paquete Grande: $370.97
Paquete Familiar: $699.22
Papa Antojo: $50.90
Tacos Chistorra: $111.57
Tacos Chorizo: $119.37
Tacos Longaniza: $119.37
Tacos Arrachera: $101.33
Tacos Bisteck: $104.78
Arrachera Dog: $49.43
Papa Llenadora: $80.15
Papa Tragón: $153.27
Costilla 250 gr: $69.88
Costilla 500 gr: $139.75
Costilla 1000 gr: $279.50
Cochinita Medio Kg: $141.41
Papa con Cochinita: $172.92
Burrito Cochinita: $156.53
Papa Cochinita: $33.53
Básica Premium: $294.49
Familiar Premium: $1066.47
Empalme: $44.79
Orden Empalme (3): $106.76


¡Gracias por elegir Arracheras Relámpago para tus comidas! No dudes en contactarnos si tienes alguna pregunta o si te gustaría hacer un pedido. Estamos aquí para ayudarte a disfrutar de una experiencia gastronómica única y deliciosa.
            </p>
        </div>
    </main>
</div> );
}
 
export default Menu;