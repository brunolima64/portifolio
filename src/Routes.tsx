import { useRoutes } from "react-router-dom"
import { Home } from "./Pages/Home/Page"; 

export const Routes = () => {

    return useRoutes([
        {path: '/', element: <Home />}
    ]);
}