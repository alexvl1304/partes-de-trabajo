import { useAuth } from "../context/authContext";

export function ProtectedPage() {

  const auth = useAuth();

  return (
    <>
      <h3>Protected</h3>

      <h4>{auth.user}</h4>

      <button onClick={() => auth.signout(() => window.location.reload())}>signout</button>
    </>
  );
}