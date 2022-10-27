import { useAuth } from "../../context/AuthContext";

export const Greeting = () =>{

    const {user, logout, loading } = useAuth()
    const handleLogout = async()=>{
        await logout()
    }
    if(loading) return(
        <h1>Cargando</h1>
    )
    return(
        <>
        <h1>Welcome {user?.email}</h1>
        <button onClick={handleLogout}>Salir</button>
        </>
    )

}