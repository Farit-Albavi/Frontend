import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Clients from '../views/Clients'
import Register from '../views/Register'


function Home2() {
    return (
        <main className=''>
            <Sidebar></Sidebar>

            <Routes>
                <Route path='/' element={<Clients />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </main>



    )
}

export default Home2