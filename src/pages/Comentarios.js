import PerfilFoto from "../components/Perfilfoto";
import Nombres from "../components/Nombres";
import FechaHora from "../components/Fechahora"
import ComentarioFinal from "../components/ComentarioFinal";
import InputTexto from "../components/InputTexto";
import BotonSend from "../components/Botonsend";
import CerrarSesion from "../components/CerrarSesion";
import DeleteAndEdit from "../components/DeleteAndEdit";
import Reply from "../components/Reply";
import SubComentarioFinal from "../components/SubComentarioFinal";
import { ContenedorSubComentStyled } from "../components/css/ContenedorSubComentStyled";
import { ContenedorComentarioStyled } from "../components/css/ContenedorComentarioStyled";
import {HiddenReplyStyled} from "../components/css/ReplyTextStyled";
import { ContenedorGridStyled } from "../components/css/ContenedorGridStyled";
import ReplyComentario from "../components/ReplyComentario";
import { api } from "../api/ApiComentarios";
import { useEffect, useState,useContext } from "react";
import { DataContext } from "../context/DataContext";
import {ImgPerfilFoto} from "../components/css/PerfilFotoStyled"
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Comentarios=()=>{
    const [datosComentario,setDatosComentario]=useState()
    const [mostrarReply,setMostrarReply]=useState(false)
    /* const [deleteC,setDeleteC]=useState(false) */
    const [datosSubComentario,setDatosSubComentario]=useState()
    const {datoUsuarioActual,comentarioUsuarioActual,actualizado,setActualizado,limpiarInput,setLimpiarInput,obtenerIdComentario,setObtenerIdComentario,actualizadoSubComentario,setActualizadoSubComentario,setEditarComentarioPrincipal,estadoEditarComentarioP,setEstadoEditarComentarioP}=useContext(DataContext);
    
    const dataComentario={
        id:datoUsuarioActual&&datoUsuarioActual.id,
        fechahora:moment().format("YYYY-MM-DD HH:mm:ss"),
        comentario:comentarioUsuarioActual
    }
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

    const RecuperarDataSubComentario=async()=>{
        const url=`${api}subcomentarios/subcomentariofinal/`
        const response=await fetch(url,{
            method:'GET'
        })
        const datos=await response.json()
        setDatosSubComentario(datos)
    }
    useEffect(()=>{
        RecuperarData()
        RecuperarDataSubComentario()
        if(actualizadoSubComentario===true){
            setActualizadoSubComentario(!actualizadoSubComentario)
            RecuperarDataSubComentario()
        }
        if(actualizado===true){
            setActualizado(!actualizado)
            RecuperarData()
        }
        console.log("ACTUALIZADOOOO")
    },[actualizado,actualizadoSubComentario])

    const navigate=useNavigate()
    const handleCerrar=()=>{
        localStorage.clear('useractual')
        return navigate("/")
    }
    const handleReply=()=>{
        setMostrarReply(!mostrarReply)

    }
    const handleId=(id)=>{
        setObtenerIdComentario(id)
    }
    const handledDeleteComent=async(id)=>{
       
        const url=`${api}comentarios/?id=${id}`
        
            const response= await fetch(url,{
                method:'DELETE',
                
            })
            return await response.text()
        
       
    }
       const handleEditComentario=(id)=>{
        setEditarComentarioPrincipal(id)
        setEstadoEditarComentarioP(!estadoEditarComentarioP)
       } 
    

    
return(
        <div style={{"background":"rgba(80,70,65,.5)","padding":"20px"}}>
           {datosComentario?.map(element => {
               return(
                <ContenedorComentarioStyled key={element.idcomentario}>
                    
                <PerfilFoto perfilFoto={element.perfil}/>
                <ContenedorGridStyled>
            <Nombres nombre={element.nombre}/>
            <FechaHora fechahora={element.fechahora}/>
                <HiddenReplyStyled><Reply/></HiddenReplyStyled>
            
                </ContenedorGridStyled>
           
            <ComentarioFinal nombre={element.nombre} perfil={element.perfil} iduser={element.id} id={element.idcomentario} comentario={element.comentario}/>
            <div style={{"position":"relative","left":"230px","width":"90px"}}>
                   
            
            </div>
            {datosSubComentario?.map(e=>{
                if(element.idcomentario===e.idcomentarios){
                    return(
                        <ContenedorSubComentStyled key={e.idsubc}>
                        <SubComentarioFinal
                         perfil={e.perfiluser}
                         nombre={e.nombreuser}
                         fecha={e.subcomentariofecha}
                         subcomentariofinal={e.subcomentariofinal}
                         />
                         </ContenedorSubComentStyled>
                    )
                }
                
            })}
            {obtenerIdComentario===element.idcomentario && mostrarReply===true? (<ReplyComentario/>):""}
            <Reply handleId={()=>handleId(element.idcomentario)} handleReply={handleReply}/>
            {datoUsuarioActual.id===element.id&&<DeleteAndEdit handleEditComentario={()=>handleEditComentario(element.idcomentario)} handledDeleteComent={()=>handledDeleteComent(element.idcomentario)}
              />} 
            </ContenedorComentarioStyled>
               )
           }
              
                   
                
            )} 
             <InputTexto/>
             <ImgPerfilFoto style={{"margin-top":"10px"}} alt={datoUsuarioActual&&datoUsuarioActual.nombre} src={`/img/${datoUsuarioActual&&datoUsuarioActual.perfil}`}/>
             <CerrarSesion handleCerrar={handleCerrar}/>
             <BotonSend handle={HandleComentarioUsuarioActual}/>
        </div>
        
       

    
)
}
export default Comentarios;