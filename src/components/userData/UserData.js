import { useAuth } from "../../context/AuthContext";
import "./userData.css";

export const Greeting = () => {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  if (loading) return <h1>Cargando</h1>;
  return (
    <div className="greeting">
      <h1>Welcome {user?.displayName || user?.email}</h1>
      {user ? <button onClick={handleLogout}>Salir</button> : null}
    </div>
  );
};
