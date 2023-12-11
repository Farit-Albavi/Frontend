import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home2 from './views/Home2'
import { BrowserRouter } from 'react-router-dom'
import { DataContext, DataContextProvider } from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <Home2 />
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>,
)
