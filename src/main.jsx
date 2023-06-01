import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './componentes/Index'
import Productos from './componentes/Productos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Productos />
  </React.StrictMode>,
)
