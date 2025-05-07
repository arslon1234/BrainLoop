import { createBrowserRouter } from "react-router-dom";
import { PlayGround } from "@pages";
export const router = createBrowserRouter([
    {
      path: '/',
      element: <PlayGround />,
    },
]);