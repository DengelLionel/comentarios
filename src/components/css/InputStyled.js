import styled from "styled-components";
export const InputStyled=styled.textarea`
width:87%;
height:80px;
padding:20px;
font-size:1.5em;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
background-color:rgb(48, 47, 58);
color:#fafafa;
border-radius:20px 20px 20px 20px;
resize:none;
outline: none;
@media screen and (min-width: 768px){
    width:500px;
    }
@media screen and (min-width: 1280px){
        width:500px;
        
        }
`;
export const Input=styled.input`
padding:5px;
outline:none;
width:300px;

`;