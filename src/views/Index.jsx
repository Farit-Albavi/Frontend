import { useState } from 'react'
import Header from '../components/Header'
import PriceCard from '../components/PriceCard'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'

function Home() {



    return (
        <>

            {/* Combinación con #192655 como Color Principal:
          Principal: #192655 (Azul oscuro) => nav, buttons, h1, 
          Secundario: #576574 (Gris azulado medio) => h2 <, 
          Acento: #e74c3c (Rojo coral) => buttons, 
          Fondo: #2c3e50 (Gris azulado oscuro) 
      */}

            {/* Header */}
            <header className='w-full bg-[#192655] h-28 text-white flex justify-between items-center px-3'>
                <Header />
            </header>

            <section className=' text-center w-80 m-auto py-10 h-auto'>
                <h1 className='text-4xl font-bold text-[#192655] my-3'> Gestion de suscripciones de gimnasio</h1>
                <h6 className='text-[#576574] text-sm my-2'>En la era digital actual, la gestión eficiente de clientes en gimnasios ha evolucionado, dejando atrás las anotaciones con hojas de papel y lápices. Nuestro innovador
                    software para la gestión de clientes de gimnasio te ofrece una solución completa y moderna para simplificar tus operaciones diarias.</h6>

            </section>

            {/* Card de precios pd: le puse ancho y largo */}
            <section className='text-white m-auto w-80 h-80'>
                <PriceCard></PriceCard>
            </section>

            {/* Funcionalidades */}
            <ul className=' m-4 text-center' >
                <h1 className='underline underline-offset-4 mb-2'>Funcionalidades</h1>
                <li>Gestion de usuarios ✅</li>
                <li>Chequeo de suscripciones ✅</li>
                <li>Registro de clientes ✅</li>
                <li>Notificacion de caducidad✅</li>
                <li>Informes y estadisticas ✅</li>
            </ul>

            {/* Servicios */}

            <section className='w-full h-full flex flex-col items-center justify-center gap-5 my-10'>
                <ServiceCard />
            </section>


            <footer className='w-full bg-[#192655]  text-white '>
                <Footer />
            </footer>

        </>
    )
}

export default Home