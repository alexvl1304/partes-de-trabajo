import { useAuth } from "../context/authContext";
import "../assets/css/App.css"

export function PublicPage() {

  const auth = useAuth();


  return (
    <div className="container">
      <h3>Public</h3>

      <h4>{(auth.user == null)? "No has iniciado sesión" : "Usuario: " + auth.user}</h4>
    
    </div>
  );
}