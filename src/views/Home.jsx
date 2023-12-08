import Navbar from '../components/Navbar'
import Contenido from '../components/Contenido'
import { Routes, Route } from 'react-router-dom'
import Register from '../views/Register'
import Clients from '../views/Clients'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'



function Home() {

  const { refreshList } = useContext(DataContext)

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main className='flex flex-col items-center justify-center w-screen '>
        <section className='w-screen pt-52 flex items-center justify-center '>
          <Contenido></Contenido>
        </section>
        <button className='bg-black text-green-500 p-2 rounded-xl my-2' onClick={refreshList}>
          Actualizar
        </button>
        <Routes>
          <Route path='/clients' element={<Clients />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </>
  )
}

export default Home
