import {ButtonDeleteStyled,ButtonEditStyled} from "./css/ButtonStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { api } from "../api/ApiComentarios";
const DeleteAndEdit=({handledDeleteComent,handleEditComentario,handledDeleteSubComent,handleEditSubComentario})=>{
  
    const {deleteComentario}=useContext(DataContext)
    console.log("EL ID PARA ELIMINAR ES : ",deleteComentario )
    const handleDelete=()=>{
        if(handledDeleteComent){
            return handledDeleteComent();
        }
        else if(handledDeleteSubComent){
            return handledDeleteSubComent();
        }
       
    }
    const handleEdit=()=>{
        
         if(handleEditComentario){
            return handleEditComentario();
        }
        else if(handleEditSubComentario){
            return handleEditComentario();
        }
    }
    
    return(
    <div style={{"position":"relative","left":"90px","width":"100px"}}>
    <ButtonDeleteStyled onClick={()=>{handleDelete()}}>DELETE</ButtonDeleteStyled>
    <ButtonEditStyled onClick={()=>handleEdit()} >EDIT</ButtonEditStyled>   
    </div>
    
    )
}
export default DeleteAndEdit;