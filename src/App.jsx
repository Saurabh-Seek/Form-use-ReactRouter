import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Form from './components/Form'

function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/form",
      element:<><Navbar/><Form/></>
    },

{
  path:"/about",
  element:<><Navbar/><About/></>
},

  ])


  return (
    <>
    
   
    <RouterProvider router={router} />
    </>
  )
}

export default App
