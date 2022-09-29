import PerfilFoto from "../components/Perfilfoto";
import Nombres from "../components/Nombres";
import FechaHora from "../components/Fechahora"
import ComentarioFinal from "../components/ComentarioFinal";
import InputTexto from "../components/InputTexto";
import BotonSend from "../components/Botonsend";
import Modal from "../components/Modal";
import DeleteAndEdit from "../components/DeleteAndEdit";
import Reply from "../components/Reply";
import SubComentarioFinal from "../components/SubComentarioFinal";
import { useCommtsCrud, useSubcomentsAll,useHandlesComments} from "../hooks/useCommtsCrudYhandles";
import { ContenedorSubComentStyled } from "../components/css/ContenedorSubComentStyled";
import { ContenedorComentarioStyled } from "../components/css/ContenedorComentarioStyled";
import {HiddenReplyStyled,HiddenReply2Styled} from "../components/css/ReplyTextStyled";
import { ContenedorGridStyled,ContenedorAddComentarioStyled } from "../components/css/ContenedorGridStyled";
import ReplyComentario from "../components/ReplyComentario";
import ReplySubComentario from "../components/ReplySubComentario";
import { useEffect,useContext } from "react";
import { DataContext } from "../context/DataContext";
import {ImgPerfilFoto} from "../components/css/PerfilFotoStyled"
import { useState } from "react";
import BotonEliminarCancelar from "../components/ContenidoEliminarYcancelar";

const Comentarios=()=>{
    const [idComentarioParaInterfaz,setIdComentarioParaInterfaz]=useState([])
    const {RecuperarData,handledDeleteComent,HandleComentarioUsuarioActual,handledDeleteSubComent}=useCommtsCrud();
    const {handleCerrar,handleReply,handleId,mostrarReply,handleEditComentario,idSubcomentario,handleObtenerIdSubComent,handleReplySubComentario,mostrarReplySubcomentario,handleEditSubComentario,handleIdComentarioParaSubComentario}=useHandlesComments();
    const {datosSubComentario,RecuperarDataSubComentario}=useSubcomentsAll();
    const {datoUsuarioActual,actualizado,setActualizado,obtenerIdComentario,actualizadoSubComentario,setActualizadoSubComentario,datosComentario,actualizadoSubSubComentario,setActualizadoSubSubComentario,setLimpiarSubSubComentario,idComentarioParaSubComentario,editarSubComentarioPrincipal,modalAccion,setModalAccion,modalAccionSubComentario,setModalAccionSubComentario}=useContext(DataContext);
    
    useEffect(()=>{
        RecuperarData()
        RecuperarDataSubComentario()
        if(actualizadoSubComentario===true){
            setActualizadoSubComentario(!actualizadoSubComentario)
            RecuperarDataSubComentario()
        }
        else if(actualizado===true){
            setActualizado(!actualizado)
            RecuperarData()
        }
        else if(actualizadoSubSubComentario===true){
            setActualizadoSubSubComentario(!actualizadoSubSubComentario)
            RecuperarDataSubComentario()

        }
        else if(modalAccion===false){
            RecuperarData()
        }
        else if(modalAccionSubComentario===false){
            RecuperarData()
        }


      
    },[actualizado,actualizadoSubComentario,actualizadoSubSubComentario,modalAccion,modalAccionSubComentario])
    console.log("El valor es : ",mostrarReplySubcomentario)
    console.log("Los idcomentarios es ",idComentarioParaInterfaz&&idComentarioParaInterfaz)
return(
        <div style={{"background":"rgba(80,70,65,.5)","padding":"20px"}}>
           {datosComentario?.map(comentarioPrincipal => {
               return(
                <>
                <ContenedorComentarioStyled key={comentarioPrincipal.idcomentario}>
                    
                <PerfilFoto perfilFoto={comentarioPrincipal.perfil}/>
                <ContenedorGridStyled>
            <Nombres nombre={comentarioPrincipal.nombre}/>
            <FechaHora fechahora={comentarioPrincipal.fechahora}/>
                <HiddenReplyStyled><Reply handleId={()=>handleId(comentarioPrincipal.idcomentario)} handleReply={handleReply}/></HiddenReplyStyled>
            
                </ContenedorGridStyled>
           
            <ComentarioFinal nombre={comentarioPrincipal.nombre} perfil={comentarioPrincipal.perfil} iduser={comentarioPrincipal.id} id={comentarioPrincipal.idcomentario} comentario={comentarioPrincipal.comentario}/>
            {obtenerIdComentario===comentarioPrincipal.idcomentario && mostrarReply===true&& <ReplyComentario/>}
                <HiddenReply2Styled>    
            <Reply
             handleId={()=>handleId(comentarioPrincipal.idcomentario)}
              handleReply={handleReply}/>
            </HiddenReply2Styled>
            {datoUsuarioActual.id===comentarioPrincipal.id&&<DeleteAndEdit
             handleEditComentario={()=>handleEditComentario(comentarioPrincipal.idcomentario)}
             handledSelectDeleteComentario={()=>setModalAccion(true)}
              />} { modalAccion===true&&<Modal>
                {datoUsuarioActual.id===comentarioPrincipal.id&&<BotonEliminarCancelar
            handledDeleteComent={()=>handledDeleteComent(comentarioPrincipal.idcomentario)}
              />}
                </Modal>}
            </ContenedorComentarioStyled>
            {/* INICIA SUBCOMENTARIO */}
            {datosSubComentario?.map(e=>{
               
                if(comentarioPrincipal.idcomentario===e.idcomentarios){
                   
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
                         handleIdComentarioParaSubComentario={()=>handleIdComentarioParaSubComentario(comentarioPrincipal.idcomentario)}
                         />
                       
                            
                         {
                         datoUsuarioActual.id===e.iduser&&<DeleteAndEdit handleEditSubComentario={()=>handleEditSubComentario(e.idsubc)} handledSelectDeleteSubComentario={()=>setModalAccionSubComentario(true)}
                         handleIdComentarioParaSubComentario={()=>handleIdComentarioParaSubComentario(comentarioPrincipal.idcomentario)} 
                         
              />} 
              { modalAccionSubComentario===true&&<Modal>
                {datoUsuarioActual.id===e.iduser&&<BotonEliminarCancelar
           handledDeleteSubComent={()=>handledDeleteSubComent(e.idsubc)}
              />}
                </Modal>}
                         </ContenedorSubComentStyled>
                    )
                }
                
            })}   {/* FINALIZA SUB COMENTARIO */}
            
            </>
               )
           })} {/* FINALIZA TODO EL COMENTARIO */}


             
             <ContenedorAddComentarioStyled >
             <ImgPerfilFoto style={{"margin-top":"10px"}} alt={datoUsuarioActual&&datoUsuarioActual.nombre} src={`/img/${datoUsuarioActual&&datoUsuarioActual.perfil}`}/>
             <InputTexto/>
             {/* <CerrarSesion handleCerrar={handleCerrar}/> */}
             <BotonSend handle={HandleComentarioUsuarioActual}/>
             </ContenedorAddComentarioStyled>
                
        </div>
        
       

    
)
}
export default Comentarios;