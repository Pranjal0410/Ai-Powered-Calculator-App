import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import Home from './screens';

import './index.css'; // Adjust based on your directory structure

const paths = [
    {
        path: '/',
        element: (
          <Home/>
        ),
    },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/calculate`;
    console.log('API URL:', import.meta.env.VITE_API_URL);
    return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter}/>
    </MantineProvider>
    )
};

export default App;