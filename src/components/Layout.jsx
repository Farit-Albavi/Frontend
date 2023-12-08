import React from 'react'
import Item from './Item'
import client from '../svgs/client.svg'

function Layout() {




    return (

        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <Item svg={client} text={'Listar Cliente'} url={'/clients'} />
            <Item svg={client} text={'Agregar Cliente'} url={'/register'} />
        </ul>
    )
}

export default Layout