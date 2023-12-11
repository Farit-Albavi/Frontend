import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Clients from '../views/Clients'
import Register from '../views/Register'
import Index from '../views/Index'


function Home2() {
    return (
        <main className=''>
            <Sidebar></Sidebar>

            <Routes>
                <Route path='/' element={<Clients />} />
                <Route path='/register' element={<Register />} />
                <Route path='/index' element={<Index />} />
            </Routes>
        </main>



    )
}

export default Home2