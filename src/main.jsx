import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './views/Index'
import { BrowserRouter } from 'react-router-dom'
import { DataContext, DataContextProvider } from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>,
)
