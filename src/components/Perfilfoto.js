
import { ImgPerfilFoto } from "./css/PerfilFotoStyled";
const PerfilFoto=({perfilFoto})=>{
    return(
        <ImgPerfilFoto alt={perfilFoto} src={`/img/${perfilFoto}`}/>
        
      
        
      
        
    )
}
export default PerfilFoto;