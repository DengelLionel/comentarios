import PerfilFoto from "../components/Perfilfoto";
import Nombres from "../components/Nombres";
import FechaHora from "../components/Fechahora"
import ComentarioFinal from "../components/ComentarioFinal";
import { ContenedorComentarioStyled } from "../components/css/ContenedorComentarioStyled";
import { ContenedorGridStyled } from "../components/css/ContenedorGridStyled";
import { api } from "../api/ApiComentarios";
import { useEffect, useState } from "react";
const Comentarios=()=>{
    const [datosComentario,setDatosComentario]=useState()
    const RecuperarData=async()=>{
        const url=`${api}join/`
        try{
            let response = await fetch(url,{
                method:'GET',
                headers:{
                    'Content-type':'application/json;charset=utf-8'
                },
            });
            let result=await response.json();
            
             setDatosComentario(result)
        }catch(error){
            console.log("ERROR ::: ",error)
        }
      
    }
    useEffect(()=>{
        RecuperarData()
    },[])
    console.log(datosComentario)
return(
        <div style={{"background":"rgba(80,70,65,.5)"}}>
           {datosComentario&&datosComentario.map(element => 
              
                    <ContenedorComentarioStyled key={element.id}>
            <ContenedorGridStyled>
            <PerfilFoto perfilFoto={element.id}/>
        <Nombres nombre={element.nombre}/>
        <FechaHora fechahora={element.fechahora}/>
            </ContenedorGridStyled>
       
        <ComentarioFinal comentario={element.comentario}/>
        </ContenedorComentarioStyled>
                
            )} 
        
        </div>
        
       

    
)
}
export default Comentarios;