import { InputStyled } from "./css/InputStyled";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
const InputTexto=()=>{
    const{comentarioUsuarioActual,setComentarioUsuarioActual,actualizado,limpiarInput,setLimpiarInput}=useContext(DataContext)
    const [valor,setValor]=useState()
   useEffect(()=>{
        
        
   },[limpiarInput,valor])
        const activarEscritura=()=>{
            setLimpiarInput(false)
        }
    return( 
        <InputStyled value={limpiarInput===true?"":setLimpiarInput(false)} onClick={activarEscritura} onChange={(e)=>setComentarioUsuarioActual(e.target.value)} placeholder="Add a comments..."></InputStyled>
    )
}
export default InputTexto;