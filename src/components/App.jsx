import React from 'react';
import './App.scss'


import Messanger from './Messenger/Messenger';
import ErrorPage from './ErrorPage/ErrorPage';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import News from './News/News';

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Provider } from "react-redux"
import store, {persistor} from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'


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
              {
                path: "news",
                element: <News />,
              },
          ]
        },
    ])

     return(
      <Provider store={store}>
         <PersistGate persistor={persistor}>
           <RouterProvider router={router} />
        </PersistGate>
      </Provider>
      )
};

export default App;