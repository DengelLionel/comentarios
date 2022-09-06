import { ButtonStyled } from "./css/ButtonStyled";
const CerrarSesion=({handleCerrar})=>{
    return(
        <ButtonStyled onClick={handleCerrar}>Cerrar</ButtonStyled>
    )
}
export default CerrarSesion;