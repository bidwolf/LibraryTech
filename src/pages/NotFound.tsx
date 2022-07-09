import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <main>
            <h2>Error 404</h2>
            <p>Page not found.
                <Link to="/"> click here to go to home page</Link></p>
        </main>
     );
}

export default NotFound;