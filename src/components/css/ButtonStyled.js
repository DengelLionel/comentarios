import styled from "styled-components";
export const ButtonStyled=styled.button`
border-radius:20px 20px 20px 20px;
background-color:rgb(0, 100, 120);
color:#fafafa;
border-color:transparent;
cursor:pointer;
outline:none;
font-weight:700;
width:120px;
height:50px;
@media screen and (min-width:768px){
    background-color:rgb(0, 100, 120);
    margin-right:20px;
    cursor:pointer;
    &:hover{
        background-color:rgb(0,0,30);
        cursor:pointer;
    }

}



`;
export const ButtonDeleteStyled=styled.a`
color:rgb(212, 15, 15);
font-weight:700;
margin-right:20px;
cursor:pointer;
@media screen and (min-width:1280px){
    font-size:1.2rem;
}
`;
export const ButtonEditStyled=styled.a`
color:rgb(15, 159, 212);
font-weight:700;
cursor:pointer;
@media screen and (min-width:1280px){
    font-size:1.2rem;
}
`;
export const BotonEliminarDefinitivo=styled.button`
background-color:#E22B2B;
color:#fafafa;
border-radius:10px 10px 10px 10px;
padding:10px;
font-weight:bold;
border-color:transparent;
`
export const BotonCancelar=styled.button`
background-color:#2B3539;
color:#fafafa;
border-radius:10px 10px 10px 10px;
padding:10px;
font-weight:bold;
border-color:transparent;
`
