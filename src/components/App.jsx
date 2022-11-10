import React from 'react';
import './App.scss'

import Messanger from './Messenger/Messenger';
import ErrorPage from './ErrorPage/ErrorPage';
import Navigation from './Navigation/Navigation';

import {createBrowserRouter,RouterProvider} from "react-router-dom";




const App = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Navigation />,
          errorElement: <ErrorPage />,
          children: [ 
            {
                path: "/chats/:chatsId",
                element: <Messanger />,
              },
              {
                path: "profile",
                element: <div>Your profile</div>,
              },
          ]
        },
    ])

     return(
        <RouterProvider router={router} />
      )
};

export default App;