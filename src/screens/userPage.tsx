import { useAuth } from "../context/authContext";

export function UserPage() {

    const auth = useAuth();

    return (
        <div>
            <h3>User</h3>

            <h4>{auth.user}</h4>

            <button onClick={() => auth.signout(() => window.location.reload())}>signout</button>
        </div>
    );
}