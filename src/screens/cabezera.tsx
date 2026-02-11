import { Link, Outlet } from "react-router-dom";

export function Cabezera() {
    return (
        <div >
            <div  className="cabezera">
                <Link to="/">Public Page</Link>
                <Link to="/user">User Page</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}