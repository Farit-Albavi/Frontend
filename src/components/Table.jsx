import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataContext'



function Table() {


    const { refreshList } = useContext(DataContext)

    const { users, deleteButton, renovarSuscripcion } = useContext(DataContext)

    const cantidadTotalPaginas = Math.ceil(users.length / 10);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        // Filtra la lista de usuarios basándose en el término de búsqueda
        const filteredResults = users.filter((user) =>
            user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredUsers(filteredResults);
    }, [searchTerm, users]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 w-full lg:w-[940px] bg-gray-800 p-2">

            {/* Buscar elemento */}
            <div className='flex justify-between pb-5 pt-2'>
                <button className='flex gap-2 bg-gray-700 text-gray-400 hover:bg-gray-700/80 p-2 rounded-xl px-5' onClick={refreshList}>
                    <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
                    </svg>
                    <span>Refrescar</span>
                </button>

                <div className="relative flex">
                    <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input onChange={(e) => setSearchTerm(e.target.value)}
                        type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar cliente" />
                </div>
            </div>

            {/* Contenido */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha registro
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Suscripción
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>


                <tbody >
                    {filteredUsers.slice().sort((a, b) => {
                        const fechaA = new Date(a.fecha_registro);
                        const fechaB = new Date(b.fecha_registro);
                        return fechaA - fechaB;
                    }).map((user, index) => (
                        <tr key={index} className=" border-b bg-gray-800 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {user.nombre}
                            </th>
                            <td className="px-6 py-4">
                                {user.fecha_registro}
                            </td>
                            <td className="px-6 py-4">
                                {user.dias_suscripcion < 0 ? "Expirado." : user.dias_suscripcion + " días restantes."}
                            </td>
                            <td className="py-4 flex gap-5 justify-end">
                                <button onClick={() => renovarSuscripcion(user.id)} className='bg-green-600 py-1 px-2 rounded-md hover:bg-green-600/90'>Renovar</button>
                                <button onClick={() => deleteButton(user.id)} className='bg-red-600 py-1 px-2 rounded-md hover:bg-red-600/90'>Borrar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className='w-full flex items-center justify-between text-white my-2 '>
                <div className='mx-5'>
                    1 de 2 páginas
                </div>
                <div className='flex gap-5'>
                    <button className='hover:underline hover:underline-offset-4 py-1  rounded-md'>Siguiente</button>
                    <button className='hover:underline hover:underline-offset-4 py-1 rounded-md'>Anterior</button>
                </div>
            </div>
        </div>)
}

export default Table