import { createContext, useState, useEffect } from 'react'
import axios from "axios";


export const DataContext = createContext()

export function DataContextProvider({ children }) {


    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8080/clients").then(response => {
            setUsers(response.data)
        })
    }, []);

    const refreshList = () => {
        axios.get('http://localhost:8080/clients/updateClients').then(response => setUsers(response.data))
    }


    const deleteButton = (id) => {
        axios.delete(`http://localhost:8080/clients/delete=${id}`)
            .then(response => {
                setUsers(users.filter(user => user.id !== id));
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        alert("Haz eliminado al cliente")
    }

    const renovarSuscripcion = (id) => {
        axios.post(`http://localhost:8080/clients/renovar=${id}`)
            .then(response => console.log("Exito de la operacion:" + response.data))
            .catch(error => console.log("Exito de la operacion:" + error.data))
        alert("Haz renovado la suscripcion del cliente id: " + id)
        refreshList()
    }



    return (
        <DataContext.Provider value={{
            users: users,
            deleteButton: deleteButton,
            refreshList: refreshList,
            renovarSuscripcion: renovarSuscripcion
        }}>
            {children}
        </DataContext.Provider>
    )
}

