import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

function Table() {








    useEffect(() => {
        // Reinicia la página actual cuando se realiza una nueva búsqueda
        setCurrentPage(1);
    }, [searchTerm]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 w-full lg:w-[940px] bg-[#192655] p-2">
            {/* Buscar elemento */}
            <div className='flex justify-between pb-5 pt-2'>
                {/* ... Código anterior ... */}
            </div>

            {/* Contenido */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-700 dark:text-gray-400">
                    {/* ... Código anterior ... */}
                </thead>
                <tbody>
                    {currentUsers.slice().sort((a, b) => {
                        const fechaA = new Date(a.fecha_registro);
                        const fechaB = new Date(b.fecha_registro);
                        return fechaA - fechaB;
                    }).map((user, index) => (
                        <tr key={index} className=" border-b bg-[#192655] border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
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


        </div>
    );
}

export default Table;
