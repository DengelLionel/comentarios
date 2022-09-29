import styled from "styled-components"
import ReactDOM from "react-dom"
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
export const ModalsContainer=styled.section`
width:100%;
height:100%;
position:fixed;
top:0px;
background-color:rgba(0,0,0,.2);
transition:all .5s;
display:flex;
justify-content:center;
align-items:center;
`
export const ModalContend=styled.article`
background-color:#fafafa;
padding:15px;
width:300px;
height:auto;
border-radius:20px 20px 20px 20px;
`
export default function Modal({children}){
    const {modalAccion,modalAccionSubComentario}=useContext(DataContext)
    return ReactDOM.createPortal(<ModalsContainer>
        <ModalContend>
            {children}
        </ModalContend>
    </ModalsContainer>,document.getElementById('modal'))
        
        
    
}