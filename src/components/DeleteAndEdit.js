import {ButtonDeleteStyled,ButtonEditStyled} from "./css/ButtonStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { api } from "../api/ApiComentarios";
const DeleteAndEdit=({handledDeleteComent,handleEditComentario})=>{
  
    const {deleteComentario}=useContext(DataContext)
    console.log("EL ID PARA ELIMINAR ES : ",deleteComentario )
    
    return(
    <div style={{"position":"relative","left":"90px","width":"100px"}}>
    <ButtonDeleteStyled onClick={()=>{handledDeleteComent()}}>DELETE</ButtonDeleteStyled>
    <ButtonEditStyled onClick={()=>handleEditComentario()} >EDIT</ButtonEditStyled>   
    </div>
    
    )
}
export default DeleteAndEdit;