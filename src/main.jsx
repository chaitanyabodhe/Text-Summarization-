import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {Route, createRoutesFromElements, createBrowserRouter,RouterProvider } from 'react-router-dom'
import { element } from 'prop-types'
import Home from './components/Home.jsx'
import Textsum from './components/Textsum.jsx'
import Para from './components/Para.jsx'
import Plag from './components/plag.jsx'
import Generate from './components/Generate.jsx'
import Gram from './components/Gram.jsx'
import Signin from './components/Signin.jsx'
import Login from './components/Login.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Textsum' element={<Textsum/>} />
      <Route path='/Para' element={<Para/>} />
      <Route path='/Gram' element={<Gram/>}/>
      <Route path='/Plag' element={<Plag/>} />
        <Route path='/Generate' element={<Generate/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
