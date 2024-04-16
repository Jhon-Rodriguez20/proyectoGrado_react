import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function RutaPrivada() {

    const conectado = useSelector(estado=> estado.conectado);

    return (conectado) ? <Outlet /> : <Navigate to={"/signin"} replace/>

}

export {RutaPrivada}