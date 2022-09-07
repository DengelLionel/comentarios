import { ComentarioFinalStyled } from "./css/ComentarioFinalStyled";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { ButtonStyled } from "./css/ButtonStyled";
import { api } from "../api/ApiComentarios";
import moment from "moment";
const ComentarioFinal=({comentario,id,nombre,perfil,iduser})=>{
  const {editarComentarioPrincipal,estadoEditarComentarioP,setEstadoEditarComentarioP}=useContext(DataContext)
  
  const [actualizarComentario,setActualizarComentario]=useState()
  const [valor,setValor]=useState()
  const datosActualizarComentario={
    idcomentario:editarComentarioPrincipal,
    id:iduser,
    fechahora:moment().format("YYYY-MM-DD HH:mm:ss"),
    comentario:actualizarComentario
  }
 
  /* const newLine=valor.match(/\n/g).length;
  console.log(newLine) */
    const ActualizarComentario=async()=>{
      setEstadoEditarComentarioP(false)
      const url=`${api}comentarios/`
      const response=await fetch(url,{
        method:'PUT',
        body:JSON.stringify(datosActualizarComentario)
      })
      return await response.text()
    }
    return(
    <>
     <ComentarioFinalStyled  value={actualizarComentario} onChange={(e)=>{setActualizarComentario(e.target.value);setValor(e.target.value)}} key={id} disabled={editarComentarioPrincipal===id&&editarComentarioPrincipal&&estadoEditarComentarioP===true?false:true}>
          {comentario}
      </ComentarioFinalStyled>  
      {editarComentarioPrincipal&&editarComentarioPrincipal===id&&estadoEditarComentarioP===true?(<ButtonStyled onClick={ActualizarComentario}>UPDATE</ButtonStyled>):""}
    </>
     
    )
}
export default ComentarioFinal;