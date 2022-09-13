import { InputStyled } from "./css/InputStyled";
import { ButtonStyled } from "./css/ButtonStyled";
import { ImgPerfilFoto } from "./css/PerfilFotoStyled";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { api } from "../api/ApiComentarios";
import moment from "moment";
const ReplySubComentario=()=>{
    const {datoUsuarioActual,actualizadoSubSubComentario,setActualizadoSubSubComentario,limpiarSubSubComentario,setLimpiarSubSubComentario,idComentarioParaSubComentario}=useContext(DataContext)
    const [subComentario,setSubComentario]=useState()
   
    const dataSubComentario={
        idcomentario:idComentarioParaSubComentario,
        id:datoUsuarioActual.id,
        subcomentario:subComentario,
        fechahora:moment().format("YYYY-MM-DD HH:mm:ss")
    }
    const EnviarReply=async()=>{
        setLimpiarSubSubComentario(!limpiarSubSubComentario)
        setActualizadoSubSubComentario(!actualizadoSubSubComentario)
        const url=`${api}subcomentarios/`
        const response=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(dataSubComentario)   
        })
        return await response.text()
    }
    const limpiarSubcomentarios=()=>{
        setLimpiarSubSubComentario(false)
      
    }
    console.log(dataSubComentario)
    return(
        <>
        
         <InputStyled
          value={limpiarSubSubComentario===true?"":setLimpiarSubSubComentario(false)}
            onChange={(e)=>setSubComentario(e.target.value)} 
            placeholder="Responde el comentario"
            onClick={limpiarSubcomentarios}></InputStyled>
         <ImgPerfilFoto alt={datoUsuarioActual.nombre} src={`/img/${datoUsuarioActual.perfil}`} />  
         <ButtonStyled onClick={EnviarReply}>REPLY</ButtonStyled>  
        </>
    )
}
export default ReplySubComentario;