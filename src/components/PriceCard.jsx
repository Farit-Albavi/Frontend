import { useState } from 'react'

function PriceCard() {



    const [isAnual, setIsAnual] = useState(false)

    const onAnual = () => {
        setIsAnual(true)
    }

    const onMonthly = () => {
        setIsAnual(false)
    }

    return (
        <div className='bg-[#192655] rounded-xl text-center w-80 '>

            <div className='mb-2 pt-5'>
                <button className='bg-[#e74c3c] hover:bg-[#e74c3c]/90 rounded-l-lg w-32 py-3' onClick={onMonthly}>Mensual</button>
                <button className='bg-[#576574]/70 hover:bg-[#576574]/90 rounded-r-lg w-32 py-3' onClick={onAnual}>Anual</button>
            </div>

            <div>
                <h1 className='text-3xl mt-10' id='price'>
                    {isAnual ? '1.530.000 Gs. / año' : '150.000 Gs. / mes'}
                </h1>
                <h6 className={`text-[#e74c3c] text-sm pl-32 pt-1 ${isAnual ? 'block' : 'hidden'}`} > 15% menos</h6>
            </div>

            <div className='py-10'>
                <p className='text-md px-4'>
                    {isAnual ? '¡Todo un sistema de gestion para tus suscripciones por menos de una suscripcion de gimnasio!'
                        : '¡Todo un sistema de gestion para tus suscripciones por el precio de una suscripcion de gimnasio!'}
                </p>
            </div>
            <button className='bg-red-500 hover:bg-red-500/90 p-2 my-4 rounded-xl'>
                {isAnual ? 'Adquirir servicio anual' : 'Adquirir servicio mensual'}
            </button>


        </div>
    )
}

export default PriceCard