import { Link, Outlet } from "react-router-dom";

export function Cabecera() {
    return (
        <div >
            <div className="cabecera">
                <Link to="/">Public Page</Link>
                <Link to="/user">User Page</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}