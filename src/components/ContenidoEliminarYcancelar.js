import {BotonEliminarDefinitivo,BotonCancelar} from "./css/ButtonStyled";
import { TituloModalEliminar,PalabrasModalEliminar } from "./css/NombreStyled";
import { ContenedorBotonesEliminarCancelar } from "./css/ContenedorGridStyled";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function BotonEliminarCancelar({handledDeleteComent,handledDeleteSubComent}){
    const {setModalAccion,setModalAccionSubComentario}=useContext(DataContext)
       const EliminarComentario=()=>{
        if(handledDeleteComent){
            return handledDeleteComent()
        }
        else if(handledDeleteSubComent){
            return handledDeleteSubComent()
        }
       }

    return(
        <article>
 <TituloModalEliminar>Delete comment</TituloModalEliminar>
 <PalabrasModalEliminar>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</PalabrasModalEliminar>
 <ContenedorBotonesEliminarCancelar>
 <BotonEliminarDefinitivo onClick={()=>{EliminarComentario();setModalAccion(false);setModalAccionSubComentario(false)}}>YES, DELETE</BotonEliminarDefinitivo>

        <BotonCancelar onClick={()=>{setModalAccion(false);setModalAccionSubComentario(false)}}>NO, CANCEL</BotonCancelar>
 </ContenedorBotonesEliminarCancelar>
       
        </article>
    )
}