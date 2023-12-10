import React from 'react'
import Socialmedia from '../components/Socialmedia'


function Footer() {
    return (
        <>
            <div className='flex justify-center  w-full py-5 container m-auto'>


                <ul className='lg:flex gap-10'>
                    <li className='py-1'>Politica de privacidad</li>
                    <li className='py-1'>Terminos y condiciones</li>
                    <li className='py-1'>Preguntas frecuentes</li>
                    <li className='py-1'>Precio</li>
                    <li className='py-1'>Capacitacion</li>

                </ul>

            </div>

            <Socialmedia />

            <p className='text-center'>
                © 2023 Fithub. Todos los derechos reservados.
            </p>

        </>
    )
}

export default Footer