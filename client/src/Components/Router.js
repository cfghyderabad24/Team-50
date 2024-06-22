import React, { useContext } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import ErrorRoute from './ErrorRoute'
import SignUp from '../Components/SignUp/SignUp'
import Login from '../Components/Login/Login'
import { CounterContext } from './CounterContext'
import Home from './Home/Home'
import About from './About/About'
import Profile from './Profile/Profile'
import Page from './maps/Page'

function Router() {
    let {user}=useContext(CounterContext)
    let router=createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            errorElement:<ErrorRoute/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'/signup',
                    element:<SignUp/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:`/about`,
                    element:<About/>
                },
                {
                    path:'/profile',
                    element: user ? <Profile/> : <div style={{display:"flex",height:"100vh", justifyContent:"center",alignItems:"center"}}>UnAuthorized</div>
                },
                {
                    path:'/maps',
                    element: <Page/>
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Router
