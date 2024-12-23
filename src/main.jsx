import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import { BrowserRouter,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Wrapped from './Wrapped.jsx'
import Root from './Root.jsx'
import FindWrapped from './FindWrapped.jsx'
import WrappedSummary from './WrappedSummary.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home />} />
      <Route path='/wrapped' element={<FindWrapped/>} />
      <Route path='/wrapped/:user' element={<Wrapped/>} />
      <Route path='/wrapped/:user/summary' element={<WrappedSummary/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
