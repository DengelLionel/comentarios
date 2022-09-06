
import { ImgPerfilFoto } from "./css/PerfilFotoStyled";
import { ContenedorGridStyled } from "./css/ContenedorGridStyled";
import { NombreStyled } from "./css/NombreStyled";
import { FechaHoraStyled } from "./css/FechaHoraStyled";
import { ComentarioFinalStyled } from "./css/ComentarioFinalStyled";
const SubComentarioFinal=({perfil,nombre,fecha,subcomentariofinal})=>{
    return(
            <>
             <ImgPerfilFoto alt={perfil} src={`/img/${perfil}`}/>
            <ContenedorGridStyled>
            <NombreStyled>{nombre}</NombreStyled>
            <FechaHoraStyled>{fecha}</FechaHoraStyled>
            </ContenedorGridStyled>
            <ComentarioFinalStyled>{subcomentariofinal}</ComentarioFinalStyled>  
            </>
           
    
    )
}
export default SubComentarioFinal;