import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/select",
        children: [
            {
                index: true,
                path: '',
                element: <>Select</>
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