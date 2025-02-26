import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Registering } from './register.jsx'
import { Loginpage } from './login.jsx'
import { User } from './user.jsx'

const router = createBrowserRouter([
{
 path: "/",
 element: <Registering/>
},
{
  path: "/login",
  element : <Loginpage />
},
{
  path:"user/:UserName",
  element: <User/>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='border flex justify-center items-center h-[100vh]'>
    <RouterProvider router={router} />
    </div>
    
  </StrictMode>,
)
