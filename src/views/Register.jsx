import axios from 'axios'
import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'

function Register() {

    const { refreshList } = useContext(DataContext)

    const [nombre, setNombre] = useState("")
    const [cedula, setCedula] = useState(0)
    const [telefono, setTelefono] = useState(0)
    const [isChecked, setChecked] = useState(false)

    const clients = {
        nombre: nombre,
        cedula: cedula,
        telefono: telefono,
    }

    const eventHandlerName = (event) => {
        setNombre(event.target.value)
    }

    const eventHandlerCedula = (event) => {
        setCedula(Number(event.target.value))
    }
    const eventHandlerTelefono = (event) => {
        setTelefono(Number(event.target.value))
    }

    const eventForCheckList = () => {
        setChecked(!isChecked)
        hiddenIfChecked()
    }

    const hiddenIfChecked = () => {
        if (isChecked) {
            document.getElementById('dateConf').classList.add('hidden')
        } else {
            document.getElementById('dateConf').classList.remove('hidden')
        }
    }

    const postClients = () => {
        axios.post('http://localhost:8080/clients', clients).then((response) => {
            console.log(response);
        })

        alert("Cliente agregado a la lista")
        refreshList()
        setCedula(0)
        setNombre('')
        setTelefono(0)
    }



    return (
        <section className='flex justify-center items-center h-screen'>

            <form className='mt-10 bg-slate-800 p-10 rounded-xl w-96' onSubmit={postClients}>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={eventHandlerName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={eventHandlerTelefono} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono (09XX-123-456)</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={eventHandlerCedula} type="number" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Documento de identidad</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agregar fecha de registro</label>
                    <input type="checkbox" className='mt-3' checked={isChecked} onChange={eventForCheckList} />
                </div>
                <div className="relative z-0 w-full mb-6 group hidden" id='dateConf'>
                    <input type="date" />
                </div>



                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
            </form>
        </section>
    )

}

export default Register