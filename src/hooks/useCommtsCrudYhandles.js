import { useState } from "react";
import { api } from "../api/ApiComentarios";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Modal from "../components/Modal";

export const useCommtsCrud=()=>{
    const {datosComentario,setDatosComentario}=useContext(DataContext)
    const RecuperarData=async()=>{
        const url=`${api}join/`
        try{
            let response = await fetch(url,{
                method:'GET',

            });
            let result=await response.json();
            
             setDatosComentario(result)
        }catch(error){
            console.log("ERROR ::: ",error)
        }
      
    }

   
    const handledDeleteComent=async(id)=>{

        const url=`${api}comentarios/?id=${id}`
        
            const response= await fetch(url,{
                method:'DELETE',
                
            })
            return await response.text()
    }
    const {setActualizado,actualizado,limpiarInput,setLimpiarInput,datoUsuarioActual,comentarioUsuarioActual}=useContext(DataContext)
    const dataComentario={
        id:datoUsuarioActual&&datoUsuarioActual.id,
        fechahora:moment().format("YYYY-MM-DD HH:mm:ss"),
        comentario:comentarioUsuarioActual
    }

    const HandleComentarioUsuarioActual= async()=>{
        setActualizado(!actualizado)
        setLimpiarInput(!limpiarInput)
        const urlPost=`${api}comentarios/`
        const response=await fetch(urlPost,{
            method:'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body:JSON.stringify(dataComentario)
        })
        return await response.text()
    }
    const handledDeleteSubComent=async(id)=>{
        const url=`${api}subcomentarios/?id=${id}`
        const response= await fetch(url,{
            method:'DELETE'
        })
        return await response.text()
    }
    return {datosComentario,RecuperarData,handledDeleteComent,HandleComentarioUsuarioActual,handledDeleteSubComent}
}


export const useSubcomentsAll=()=>{
    const [datosSubComentario,setDatosSubComentario]=useState()
    const RecuperarDataSubComentario=async()=>{
        const url=`${api}subcomentarios/subcomentariofinal/`
        const response=await fetch(url,{
            method:'GET'
        })
        const datos=await response.json()
        setDatosSubComentario(datos)
    }
    return {datosSubComentario,RecuperarDataSubComentario}
}

export const useHandlesComments=()=>{
    const {idSubcomentario,setIdSubcomentario,setObtenerIdComentario,setEditarComentarioPrincipal,setEstadoEditarComentarioP,estadoEditarComentarioP,setDatosUsuario,setDatoUsuarioActual,nombreUsuario,estadoEditarSubComentario,setEstadoEditarSubComentario,
        editarSubComentarioPrincipal,setEditarSubComentarioPrincipal,  contraseñaUsuario,datosUsuario,idComentarioParaSubComentario,setIdComentarioParaSubComentario,modalAccion}=useContext(DataContext)
    const [mostrarReply,setMostrarReply]=useState(false)
    const [mostrarReplySubcomentario,setMostrarReplySubcomentario]=useState(false)
    const navigate=useNavigate()
    const handleCerrar=()=>{
        localStorage.clear('useractual')
        return navigate("/")
    }
    const handleReply=()=>{
        setMostrarReply(!mostrarReply)

    }
    const handleReplySubComentario=()=>{
        setMostrarReplySubcomentario(!mostrarReplySubcomentario)
    }
    const handleId=(id)=>{
        setObtenerIdComentario(id)
    }
    const handleObtenerIdSubComent=(id)=>{
        setIdSubcomentario(id)
    }
    const handleEditComentario=(id)=>{
        setEditarComentarioPrincipal(id)
        setEstadoEditarComentarioP(!estadoEditarComentarioP)
    } 
    const handleEditSubComentario=(id)=>{
        setEditarSubComentarioPrincipal(id)
        setEstadoEditarSubComentario(!estadoEditarSubComentario)
       } 
      const handleIdComentarioParaSubComentario=(id)=>{
        setIdComentarioParaSubComentario(id)
      } 
      const handleMostrarModal=()=>{
       
      }
      
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
    return {idSubcomentario,handleObtenerIdSubComent,handleCerrar,handleReply,handleId,mostrarReply,handleEditComentario,HandleIngreso,handleReplySubComentario,mostrarReplySubcomentario,handleEditSubComentario,handleIdComentarioParaSubComentario,handleMostrarModal}
}

