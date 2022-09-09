import { ComentarioFinalStyled,ComentarioFinalizimaStyled } from "./css/ComentarioFinalStyled";
import { useContext, useEffect, useState,useRef } from "react";
import { DataContext } from "../context/DataContext";
import { ButtonStyled } from "./css/ButtonStyled";
import { api } from "../api/ApiComentarios";
import moment from "moment";
const ComentarioFinal=({comentario,id,nombre,perfil,iduser})=>{
  const {editarComentarioPrincipal,estadoEditarComentarioP,setEstadoEditarComentarioP}=useContext(DataContext)
  const ref=useRef(null)
  const [actualizarComentario,setActualizarComentario]=useState()
  const [botonUpdate,setBotonUpdate]=useState(false)
  const [valor,setValor]=useState()
  const datosActualizarComentario={
    idcomentario:editarComentarioPrincipal,
    id:iduser,
    fechahora:moment().format("YYYY-MM-DD HH:mm:ss"),
    comentario:actualizarComentario
  }
  console.log(valor&&valor)
  /* const newLine=valor.match(/\n/g).length;
  console.log(newLine) */
    const ActualizarComentario=async()=>{
      setBotonUpdate(true)
      if(editarComentarioPrincipal===id&&editarComentarioPrincipal&&estadoEditarComentarioP===true){
        localStorage.clear("actualizarComentario")
      }
      else if(editarComentarioPrincipal===id&&editarComentarioPrincipal&&estadoEditarComentarioP===false &&botonUpdate&&botonUpdate===true){
        localStorage.setItem("actualizarComentario",JSON.stringify(botonUpdate&&botonUpdate===true&&botonUpdate))
      }
      
      setEstadoEditarComentarioP(false)
      const url=`${api}comentarios/`
      const response=await fetch(url,{
        method:'PUT',
        body:JSON.stringify(datosActualizarComentario)
      })
      return await response.text()
    }
    useEffect(()=>{

    },[])
    const QuedaComentario=JSON.parse(localStorage.getItem("actualizarComentario"))
    console.log(QuedaComentario)
    return  (
    <>
    <article style={QuedaComentario===true?{"display":"none"}:{"display":"block"}}>
    <ComentarioFinalStyled
       ref={ref} 
        value={actualizarComentario} 
        onChange={(e)=>{setActualizarComentario(e.target.value)}}
         key={id} 
         disabled={editarComentarioPrincipal===id&&editarComentarioPrincipal&&estadoEditarComentarioP===true?false:true}>
          {comentario}
      </ComentarioFinalStyled> 
    </article>

        <article style={QuedaComentario===true?{"display":"block"}:{"display":"none"}}>
        <ComentarioFinalizimaStyled
       >
      {comentario}
      </ComentarioFinalizimaStyled>
        </article>
     
      {editarComentarioPrincipal&&editarComentarioPrincipal===id&&estadoEditarComentarioP===true?(<ButtonStyled onClick={ActualizarComentario}>UPDATE</ButtonStyled>):""}
    </>
     
    )
}
export default ComentarioFinal;