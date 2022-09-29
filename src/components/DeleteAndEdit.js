import {ButtonDeleteStyled,ButtonEditStyled} from "./css/ButtonStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useHandlesComments } from "../hooks/useCommtsCrudYhandles";


const DeleteAndEdit=({handledSelectDeleteComentario,handleEditComentario,handledSelectDeleteSubComentario,handleEditSubComentario,handleIdComentarioParaSubComentario})=>{
    const {handleMostrarModal}=useHandlesComments()
    const {deleteComentario,modalAccion,setModalAccion}=useContext(DataContext)
    console.log("EL ID PARA ELIMINAR ES : ",deleteComentario )
    console.log("modal accion ",modalAccion)
    const handleDelete=()=>{
        if(handledSelectDeleteComentario){
            
            return handledSelectDeleteComentario();
        }
        else if(handledSelectDeleteSubComentario){
            return handledSelectDeleteSubComentario();
        }
       
    }
    const handleEdit=()=>{
        
         if(handleEditComentario){
            return handleEditComentario();
        }
        else if(handleEditSubComentario){
            return handleEditSubComentario(),handleIdComentarioParaSubComentario();
        }
    }
    
    return(
    <div style={{"position":"relative","left":"90px","width":"100px"}}>
    <ButtonDeleteStyled onClick={()=>{handleDelete();handleMostrarModal()}}>DELETE</ButtonDeleteStyled>
    <ButtonEditStyled onClick={()=>handleEdit()} >EDIT</ButtonEditStyled>   
    </div>
    
    )
}
export default DeleteAndEdit;