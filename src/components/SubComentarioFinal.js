
import { ImgPerfilFoto } from "./css/PerfilFotoStyled";
import { ContenedorGridStyled } from "./css/ContenedorGridStyled";
import { NombreStyled } from "./css/NombreStyled";
import { ButtonStyled } from "./css/ButtonStyled";
import { FechaHoraStyled } from "./css/FechaHoraStyled";
import { SubComentarioFinalStyled,SubComentarioFinalBlockStyled } from "./css/ComentarioFinalStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useState } from "react";
import moment from "moment";
import { api } from "../api/ApiComentarios";
const SubComentarioFinal=({idsubc,iduser,idcoment,perfil,nombre,fecha,subcomentariofinal})=>{
    const {estadoEditarSubComentario,setEstadoEditarSubComentario,editarSubComentarioPrincipal,setEditarSubComentarioPrincipal,idComentarioParaSubComentario}=useContext(DataContext)
    const [botonUpdate,setBotonUpdate]=useState(false)
    const [actualizarSubComentario,setActualizarSubComentario]=useState()
    const datosActualizarComentario={
        idsubcomentarios:editarSubComentarioPrincipal,
        idcomentario:idComentarioParaSubComentario,
        id:iduser,
        subcomentario:actualizarSubComentario,
        fechahora:moment().format("YYYY-MM-DD HH:mm:ss")
      }
    const ActualizarSubComentario=async()=>{
        setBotonUpdate(true)
        setEstadoEditarSubComentario(false)
        const url=`${api}subcomentarios/`
        const response=await fetch(url,{
          method:'PUT',
          body:JSON.stringify(datosActualizarComentario)
        })
        return await response.text()
      }
    return(
            <article>
             <ImgPerfilFoto alt={perfil} src={`/img/${perfil}`}/>
            <ContenedorGridStyled>
            <NombreStyled>{nombre}</NombreStyled>
            <FechaHoraStyled>{fecha}</FechaHoraStyled>
            </ContenedorGridStyled>

            <SubComentarioFinalBlockStyled estadoActivoOdesactivo={editarSubComentarioPrincipal?false:estadoEditarSubComentario}>
      {subcomentariofinal}
        </SubComentarioFinalBlockStyled>

            {editarSubComentarioPrincipal===idsubc&&
            <SubComentarioFinalStyled 
              value={actualizarSubComentario}
             onChange={(e)=>{setActualizarSubComentario(e.target.value)}}
             key={idsubc}
             activarElcomentario={estadoEditarSubComentario}
            >
                {subcomentariofinal}
                </SubComentarioFinalStyled>
              }  
                {editarSubComentarioPrincipal&&editarSubComentarioPrincipal===idsubc&&estadoEditarSubComentario===true?(<ButtonStyled onClick={ActualizarSubComentario}>UPDATE</ButtonStyled>):""}
            </article>
           
    
    )
}
export default SubComentarioFinal;