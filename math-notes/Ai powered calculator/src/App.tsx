import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// ... existing imports ...
import Home from "./screens";
import "./index.css";  
const paths = [
  {
    path: '/',
    element: (<Home />),
  },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter} />
    </MantineProvider>
  );
};

export default App;