import { useAuth } from "../context/authContext";

export function PublicPage() {

  const auth = useAuth();


  return (
    <>
      <h3>Public</h3>

      <h4>{(auth.user == null)? "No has iniciado sesión" : auth.user}</h4>
    
    </>
  );
}