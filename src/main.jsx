import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(//will always use ReactDom and will always be at the root file.
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)