import { useAuth } from "../context/authContext";
import "../assets/css/App.css"

export function UserPage() {

    const auth = useAuth();

    return (
        <div className="container">
            <p className="title">Usuario:</p>

            <h4>{auth.user}</h4>

            <button onClick={() => auth.signout(() => window.location.reload())}>signout</button>
        </div>
    );
}