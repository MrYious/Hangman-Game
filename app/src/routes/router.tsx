import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/menu",
        children: [
            {
                index: true,
                path: '',
                element: <>Menu</>
            },
            {
                path: 'settings',
                element: <>Settings</>
            }
        ]
    },
    {
        path: "/instructions",
        element: <></>
    }
])