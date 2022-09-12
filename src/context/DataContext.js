import React,{ createContext,useState } from "react";

export const DataContext=createContext();
export const DataProvider=({children})=>{
    const [nombreUsuario,setNombreUsuario]=useState();
    const [contraseñaUsuario,setContraseñaUsuario]=useState();
    const [datosUsuario,setDatosUsuario]=useState();
    const [actualizado,setActualizado]=useState(false)
    const [idSubcomentario,setIdSubcomentario]=useState()
    const [editarSubComentarioPrincipal,setEditarSubComentarioPrincipal]=useState()
    const [estadoEditarSubComentarioP,setEstadoEditarSubComentarioP]=useState()
    const [editarComentarioPrincipal,setEditarComentarioPrincipal]=useState()
    const [estadoEditarComentarioP,setEstadoEditarComentarioP]=useState(false)
    const [limpiarInput,setLimpiarInput]=useState(false)
    const [deleteComentario,setDeleteComentario]=useState()
    const [limpiarSubComentario,setLimpiarSubComentario]=useState(false)
    const [actualizadoSubComentario,setActualizadoSubComentario]=useState(false)
    const [obtenerIdComentario,setObtenerIdComentario]=useState()
    const [datoUsuarioActual,setDatoUsuarioActual]=useState(JSON.parse(localStorage.getItem("useractual")))
    const [comentarioUsuarioActual,setComentarioUsuarioActual]=useState()
    
    console.log(nombreUsuario,contraseñaUsuario)
    console.log(datosUsuario)
    const data={
        setDatosUsuario,
        datosUsuario,
        nombreUsuario,
        contraseñaUsuario,
        setNombreUsuario,
        setContraseñaUsuario,
        setDatoUsuarioActual,
        datoUsuarioActual,comentarioUsuarioActual,setComentarioUsuarioActual,
        actualizado,setActualizado,limpiarInput,setLimpiarInput,
        obtenerIdComentario,setObtenerIdComentario,
        actualizadoSubComentario,setActualizadoSubComentario,
        limpiarSubComentario,setLimpiarSubComentario,
        deleteComentario,setDeleteComentario,
        editarComentarioPrincipal,setEditarComentarioPrincipal,
        estadoEditarComentarioP,setEstadoEditarComentarioP,
        idSubcomentario,setIdSubcomentario,
        editarSubComentarioPrincipal,setEditarSubComentarioPrincipal,
        estadoEditarSubComentarioP,setEstadoEditarSubComentarioP,
    }
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}