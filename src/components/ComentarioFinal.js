import { ComentarioFinalStyled,ComentarioFinalBlockStyled} from "./css/ComentarioFinalStyled";
import { useContext, useEffect, useState} from "react";
import { DataContext } from "../context/DataContext";
import { ButtonStyled } from "./css/ButtonStyled";
import { api } from "../api/ApiComentarios";
import moment from "moment";
const ComentarioFinal=({comentario,id,nombre,perfil,iduser})=>{
  const {editarComentarioPrincipal,estadoEditarComentarioP,setEstadoEditarComentarioP}=useContext(DataContext)

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
    console.log("El activo",botonUpdate)
    console.log("el sss" ,estadoEditarComentarioP)
    return  (
    <>
    <article /* style={QuedaComentario===true?{"display":"none"}:{"display":"block"}} */>
    <ComentarioFinalBlockStyled estadoActivoOdesactivo={estadoEditarComentarioP}>
      {comentario}
        </ComentarioFinalBlockStyled>

    <ComentarioFinalStyled
        onChange={(e)=>{setActualizarComentario(e.target.value)}}
         key={id}
         activarElcomentario={estadoEditarComentarioP}
         >
          {comentario}
      </ComentarioFinalStyled> 
    </article>

        
     
      {editarComentarioPrincipal&&editarComentarioPrincipal===id&&estadoEditarComentarioP===true?(<ButtonStyled onClick={ActualizarComentario}>UPDATE</ButtonStyled>):""}
    </>
     
    )
}
export default ComentarioFinal;