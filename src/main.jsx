import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layouts/Root.jsx'
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import UpdateCoffeeInfo from './components/UpdateCoffeeInfo.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    Component:Root, 
    children: [
      {
        index:true ,
         Component: Home ,
         loader: ()=>fetch('http://localhost:5000/coffees')


      },
      {
        path:'/coffee/:id',
        Component:CoffeeDetails,
        loader:({params})=>  fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"/update/:id",
        Component: UpdateCoffeeInfo,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      
      },
    { path: "/signup", Component: SignUp},
    {path: "/login", Component:Login},
    {path:"/addcoffee",Component:AddCoffee}

    ]
  },
  {
    path:'*',
    element: <h1 className='font-bold text-center text-5xl'>Sorry Bro 404 Error</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
