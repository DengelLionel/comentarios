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
import {HiddenReplyStyled,HiddenReply2Styled} from "../components/css/ReplyTextStyled";
import { ContenedorGridStyled } from "../components/css/ContenedorGridStyled";
import ReplyComentario from "../components/ReplyComentario";
import ReplySubComentario from "../components/ReplySubComentario";
import { useEffect,useContext } from "react";
import { DataContext } from "../context/DataContext";
import {ImgPerfilFoto} from "../components/css/PerfilFotoStyled"
const Comentarios=()=>{
    const {RecuperarData,handledDeleteComent,HandleComentarioUsuarioActual,handledDeleteSubComent}=useCommtsCrud();
    const {handleCerrar,handleReply,handleId,mostrarReply,handleEditComentario,idSubcomentario,handleObtenerIdSubComent,handleReplySubComentario,mostrarReplySubcomentario,handleEditSubComentario,handleIdComentarioParaSubComentario}=useHandlesComments();
    const {datosSubComentario,RecuperarDataSubComentario}=useSubcomentsAll();
    const {datoUsuarioActual,actualizado,setActualizado,obtenerIdComentario,actualizadoSubComentario,setActualizadoSubComentario,datosComentario,actualizadoSubSubComentario,setActualizadoSubSubComentario,setLimpiarSubSubComentario,idComentarioParaSubComentario,editarSubComentarioPrincipal}=useContext(DataContext);
    
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
        if(actualizadoSubSubComentario===true){
            setActualizadoSubSubComentario(!actualizadoSubSubComentario)
            RecuperarDataSubComentario()

        }

      
    },[actualizado,actualizadoSubComentario,actualizadoSubSubComentario])
    console.log("El valor es : ",mostrarReplySubcomentario)
return(
        <div style={{"background":"rgba(80,70,65,.5)","padding":"20px"}}>
           {datosComentario?.map(element => {
               return(
                <ContenedorComentarioStyled key={element.idcomentario}>
                    
                <PerfilFoto perfilFoto={element.perfil}/>
                <ContenedorGridStyled>
            <Nombres nombre={element.nombre}/>
            <FechaHora fechahora={element.fechahora}/>
                <HiddenReplyStyled><Reply handleId={()=>handleId(element.idcomentario)} handleReply={handleReply}/></HiddenReplyStyled>
            
                </ContenedorGridStyled>
           
            <ComentarioFinal nombre={element.nombre} perfil={element.perfil} iduser={element.id} id={element.idcomentario} comentario={element.comentario}/>
            <div style={{"position":"relative","left":"230px","width":"90px"}}>
                   
            
            </div>
            {/* INICIA SUBCOMENTARIO */}
            {datosSubComentario?.map(e=>{
                if(element.idcomentario===e.idcomentarios){
                    return(
                        <ContenedorSubComentStyled key={e.idsubc}>
                        <SubComentarioFinal
                         perfil={e.perfiluser}
                         nombre={e.nombreuser}
                         fecha={e.subcomentariofecha}
                         idsubc={e.idsubc}
                         iduser={e.iduser}
                         subcomentariofinal={e.subcomentariofinal}
                         />
                         {idSubcomentario===e.idsubc && mostrarReplySubcomentario===true&&<ReplySubComentario />}
                         
                         <Reply handlesubcomentariosId={()=>handleObtenerIdSubComent(e.idsubc)} handleReplySubComentario={handleReplySubComentario}
                         handleIdComentarioParaSubComentario={()=>handleIdComentarioParaSubComentario(element.idcomentario)}
                         />
                       
                            
                         {
                         datoUsuarioActual.id===e.iduser&&<DeleteAndEdit handleEditSubComentario={()=>handleEditSubComentario(e.idsubc)} handledDeleteSubComent={()=>handledDeleteSubComent(e.idsubc)}
                         handleIdComentarioParaSubComentario={()=>handleIdComentarioParaSubComentario(element.idcomentario)}
                         
              />} 
                         </ContenedorSubComentStyled>
                    )
                }
                
            })}{/* FINALIZA SUB COMENTARIO */}
            {obtenerIdComentario===element.idcomentario && mostrarReply===true? (<ReplyComentario/>):""}
                <HiddenReply2Styled>    
            <Reply handleId={()=>handleId(element.idcomentario)} handleReply={handleReply}/>
            </HiddenReply2Styled>
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