import React from 'react'
import time from '../assets/time.svg'
import calculate from '../assets/chart-line.svg'
import notifications from '../assets/notifications-active.svg'

function ServiceCard() {
  return (
    <section className='flex flex-col gap-10 lg:flex-row'>

      <div className='w-80 h-[380px] border rounded-md px-8 flex flex-col pt-10 bg-[#576574]/10 text-black'>
        <div className='flex items-center gap-5 my-4 '>
          <img src={time} alt="time img" className='h-14 w-14' />
          <h1 className='text-2xl font-bold'>Ahorra tiempo</h1>
        </div>
        <p>Renovar las suscripciones de tus clientes es tan fácil como un clic. Olvídate de la molestia de seguir manualmente las fechas de caducidad. Concentrarte en
          brindar un excelente servicio en lugar de realizar tareas administrativas repetitivas</p>
      </div>

      <div className='w-80 h-[380px] border rounded-md px-8 flex flex-col pt-10 bg-[#576574]/10 text-black'>
        <div className='flex items-center gap-5 my-4 '>
          <img src={calculate} alt="time img" className='h-14 w-14' />
          <h1 className='text-2xl font-bold'>Analiticas de ingresos</h1>
        </div>
        <p>Ofrecemos un análisis financiero detallado, permitiéndote visualizar los ingresos mes a mes y evaluar el progreso anual con facilidad, permitiéndote identificar áreas de crecimiento
          y tomar decisiones fundamentadas.</p>
      </div>

      <div className='w-80 h-[380px] border rounded-md px-8 flex flex-col pt-10 bg-[#576574]/10 text-black'>
        <div className='flex items-center gap-5 my-4 '>
          <img src={notifications} alt="time img" className='h-14 w-14' />
          <h1 className='text-2xl font-bold'>Notificación de caducidad</h1>
        </div>
        <p> Notifica a los clientes cuando su suscripción ha expirado. Esta característica va más allá de la simple administración; es una herramienta proactiva que mejora la comunicación
           y fortalece la relación con tus miembros.</p>
      </div>

    </section>
  )
}

export default ServiceCard