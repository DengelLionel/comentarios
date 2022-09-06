import { InputStyled } from "./css/InputStyled";
import { ButtonStyled } from "./css/ButtonStyled";
import { ImgPerfilFoto } from "./css/PerfilFotoStyled";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { api } from "../api/ApiComentarios";
import moment from "moment";
const ReplyComentario=()=>{
    const {datoUsuarioActual,obtenerIdComentario,actualizadoSubComentario,setActualizadoSubComentario,limpiarSubComentario,setLimpiarSubComentario}=useContext(DataContext)
    const [subComentario,setSubComentario]=useState()
    
    const dataSubComentario={
        idcomentario:obtenerIdComentario,
        id:datoUsuarioActual.id,
        subcomentario:subComentario,
        fechahora:moment().format("YYYY-MM-DD HH:mm:ss")
    }
    const EnviarReply=async()=>{
        setLimpiarSubComentario(!limpiarSubComentario)
        setActualizadoSubComentario(!actualizadoSubComentario)
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
        setLimpiarSubComentario(false)
      
    }
    console.log(dataSubComentario)
    return(
        <>
        
         <InputStyled
          value={limpiarSubComentario===true?"":setLimpiarSubComentario(false)}
            onChange={(e)=>setSubComentario(e.target.value)} 
            placeholder="Responde el comentario"
            onClick={limpiarSubcomentarios}></InputStyled>
         <ImgPerfilFoto alt={datoUsuarioActual.nombre} src={`/img/${datoUsuarioActual.perfil}`} />  
         <ButtonStyled onClick={EnviarReply}>REPLY</ButtonStyled>  
        </>
    )
}
export default ReplyComentario;