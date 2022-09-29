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
background-color:rgb(60,60,60);
padding:10px;
border-radius:10px 10px 10px 10px;
@media screen and (min-width: 1280px){
    display:grid;
    grid-template-columns:repeat(3,auto);
    width:900px;
    gap:10px;
    border-radius:20px 20px 20px 20px;
    padding:20px;

}
`
export const ContenedorBotonesEliminarCancelar=styled.article`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:15px;
`
export const ContenedorImagenEscritorio=styled.article`
display:none;
@media screen and (min-width: 640px){
    display:block;
}
`
export const ContenedorImagenMobil=styled.article`
display:grid;
padding:10px;
width:100%;
grid-template-columns:repeat(2,auto);
gap:100px;
@media screen and (min-width: 640px){
    display:none;
}
`
