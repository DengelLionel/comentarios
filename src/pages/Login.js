import { Input} from "../components/css/InputsStyled";
import { ButtonStyled } from "../components/css/ButtonStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Login=()=>{
    
     const {setNombreUsuario,setContraseñaUsuario,contraseñaUsuario,nombreUsuario,HandleIngreso}=useContext(DataContext)

    return(
        <>
        <Input value={nombreUsuario} onChange={(e)=>setNombreUsuario(e.target.value)} type="text"  placeholder="Escribe tu nombre"/>
        <Input value={contraseñaUsuario} onChange={(e)=>setContraseñaUsuario(e.target.value)} type="password"  placeholder="Escribe tu contraseña"/>
        <ButtonStyled onClick={HandleIngreso}>INICIAR</ButtonStyled>
        </>
    )

}
export default Login;