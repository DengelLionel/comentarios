import styled from "styled-components"
export const ContenedorGridStyled=styled.div`
margin-bottom:20px;
display:inline-flex;
position:relative;
bottom:20px;
left:10px;
gap:15px;
@media screen and (min-width:768px){
    position:relative;
    bottom:30px;
}
@media screen and (min-width:1280px){
    position:relative;
    bottom:20px;
}
`;
export const ContenedorAddComentarioStyled=styled.article`
@media screen and (min-width: 1280px){
    display:grid;
    grid-template-columns:repeat(3,auto);
    width:800px;
    gap:20px;
}
`
export const ContenedorBotonesEliminarCancelar=styled.article`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:15px;
`