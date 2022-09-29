import React,{ createContext,useState } from "react";

export const DataContext=createContext();
export const DataProvider=({children})=>{
    const [nombreUsuario,setNombreUsuario]=useState();
    const [contraseñaUsuario,setContraseñaUsuario]=useState();
    const [datosUsuario,setDatosUsuario]=useState();
    const [actualizado,setActualizado]=useState(false)
    const [datosComentario,setDatosComentario]=useState()
    const [idSubcomentario,setIdSubcomentario]=useState()
    const [idComentarioParaSubComentario,setIdComentarioParaSubComentario]=useState()
    const [editarSubComentarioPrincipal,setEditarSubComentarioPrincipal]=useState()
    const [editarComentarioPrincipal,setEditarComentarioPrincipal]=useState()
    const [estadoEditarComentarioP,setEstadoEditarComentarioP]=useState(false)
    const [limpiarInput,setLimpiarInput]=useState(false)
    const [deleteComentario,setDeleteComentario]=useState()
    const [limpiarSubComentario,setLimpiarSubComentario]=useState(false)
    const [limpiarSubSubComentario,setLimpiarSubSubComentario]=useState(false)
    const [actualizadoSubComentario,setActualizadoSubComentario]=useState(false)
    const [actualizadoSubSubComentario,setActualizadoSubSubComentario]=useState(false)
    const [obtenerIdComentario,setObtenerIdComentario]=useState()
    const [datoUsuarioActual,setDatoUsuarioActual]=useState(JSON.parse(localStorage.getItem("useractual")))
    const [comentarioUsuarioActual,setComentarioUsuarioActual]=useState()
    const [estadoEditarSubComentario,setEstadoEditarSubComentario]=useState(false)
    const [modalAccion,setModalAccion]=useState(false)
    const [modalAccionSubComentario,setModalAccionSubComentario]=useState(false)
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
        estadoEditarSubComentario,setEstadoEditarSubComentario,
        datosComentario,setDatosComentario,
        actualizadoSubSubComentario,setActualizadoSubSubComentario,
        limpiarSubSubComentario,setLimpiarSubSubComentario,
        idComentarioParaSubComentario,setIdComentarioParaSubComentario,
        modalAccion,setModalAccion,
        modalAccionSubComentario,setModalAccionSubComentario
    }
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}