import { useAuth } from "../../context/AuthContext";
import "./userData.css";

export const Greeting = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Cargando</h1>;
  return (
    <div className="greeting">
      {!user ?
        <h1 className="titleGreeting">Bienvenido/a Anonimo! {user?.displayName || user?.email}</h1>
        :
        <h1 className="titleGreeting">Bienvenido/a {user?.displayName || user?.email}</h1>
      }      
    </div>
  );
};
