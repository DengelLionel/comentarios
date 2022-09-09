import { Input} from "../components/css/InputStyled";
import { ButtonStyled } from "../components/css/ButtonStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useHandlesComments } from "../hooks/useCommtsCrudYhandles";
const Login=()=>{
        const {HandleIngreso}=useHandlesComments()
     const {setNombreUsuario,setContraseñaUsuario,contraseñaUsuario,nombreUsuario}=useContext(DataContext)

    return(
        <>
        <Input value={nombreUsuario} onChange={(e)=>setNombreUsuario(e.target.value)} type="text"  placeholder="Escribe tu nombre"/>
        <Input value={contraseñaUsuario} onChange={(e)=>setContraseñaUsuario(e.target.value)} type="password"  placeholder="Escribe tu contraseña"/>
        <ButtonStyled onClick={HandleIngreso}>INICIAR</ButtonStyled>
        </>
    )

}
export default Login;