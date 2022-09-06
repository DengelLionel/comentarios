import React,{ createContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/ApiComentarios";
export const DataContext=createContext();
export const DataProvider=({children})=>{
    const [nombreUsuario,setNombreUsuario]=useState();
    const [contraseñaUsuario,setContraseñaUsuario]=useState();
    const [datosUsuario,setDatosUsuario]=useState();
    const [actualizado,setActualizado]=useState(false)
    const [limpiarInput,setLimpiarInput]=useState(false)
    const [limpiarSubComentario,setLimpiarSubComentario]=useState(false)
    const [actualizadoSubComentario,setActualizadoSubComentario]=useState(false)
    const [obtenerIdComentario,setObtenerIdComentario]=useState()
    const [datoUsuarioActual,setDatoUsuarioActual]=useState(JSON.parse(localStorage.getItem("useractual")))
    const [comentarioUsuarioActual,setComentarioUsuarioActual]=useState()
    const navigate=useNavigate()
    let url=`${api}user/`
    const HandleIngreso=async()=>{
        const response=await fetch(url,{
            method:'GET'
        });
        const datos=await response.json();
        setDatosUsuario(datos);
        datosUsuario&&datosUsuario.map(e=>{
            if(nombreUsuario===e.nombres && contraseñaUsuario===e.contrasena){
                localStorage.setItem("useractual",JSON.stringify({id:e.id,nombre:e.nombres,perfil:e.perfil}))
                setDatoUsuarioActual(JSON.parse(localStorage.getItem("useractual")))
                return navigate("/comentarios")
            }
        })
    }
    console.log(nombreUsuario,contraseñaUsuario)
    console.log(datosUsuario)
    const data={
        nombreUsuario,
        contraseñaUsuario,
        setNombreUsuario,
        setContraseñaUsuario,
        HandleIngreso,
        datoUsuarioActual,comentarioUsuarioActual,setComentarioUsuarioActual,
        actualizado,setActualizado,limpiarInput,setLimpiarInput,
        obtenerIdComentario,setObtenerIdComentario,
        actualizadoSubComentario,setActualizadoSubComentario,
        limpiarSubComentario,setLimpiarSubComentario
    }
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}