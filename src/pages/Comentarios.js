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
import { useCommtsCrud, useSubcomentsAll,useHandlesComments} from "../hooks/useCommtsCrudYhandles";
import { ContenedorSubComentStyled } from "../components/css/ContenedorSubComentStyled";
import { ContenedorComentarioStyled } from "../components/css/ContenedorComentarioStyled";
import {HiddenReplyStyled} from "../components/css/ReplyTextStyled";
import { ContenedorGridStyled } from "../components/css/ContenedorGridStyled";
import ReplyComentario from "../components/ReplyComentario";
import { useEffect,useContext } from "react";
import { DataContext } from "../context/DataContext";
import {ImgPerfilFoto} from "../components/css/PerfilFotoStyled"
const Comentarios=()=>{
    const {datosComentario,RecuperarData,handledDeleteComent,HandleComentarioUsuarioActual}=useCommtsCrud();
    const {handleCerrar,handleReply,handleId,mostrarReply,handleEditComentario}=useHandlesComments();
    const {datosSubComentario,RecuperarDataSubComentario}=useSubcomentsAll();
    const {datoUsuarioActual,actualizado,setActualizado,obtenerIdComentario,actualizadoSubComentario,setActualizadoSubComentario}=useContext(DataContext);
    
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
      
    },[actualizado,actualizadoSubComentario])
  
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