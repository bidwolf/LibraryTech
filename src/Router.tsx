import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function Router() {
    return (
        <Route path="/" element={<MainPage/>}/>

    );
}

export default Router;