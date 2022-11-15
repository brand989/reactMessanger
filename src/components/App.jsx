import React from 'react';
import './App.scss'


import Messanger from './Messenger/Messenger';
import ErrorPage from './ErrorPage/ErrorPage';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Provider } from "react-redux"
import store from '../store/store'



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
                element: <Profile />,
              },
          ]
        },
    ])

     return(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      )
};

export default App;