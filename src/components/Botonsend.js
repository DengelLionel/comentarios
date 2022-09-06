import { ButtonStyled } from "./css/ButtonStyled";
const BotonSend=({handle})=>{
    return(
        <ButtonStyled onClick={handle}>SEND</ButtonStyled>
    )
}
export default BotonSend;