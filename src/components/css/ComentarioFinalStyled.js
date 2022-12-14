import styled from "styled-components";
export const ComentarioFinalStyled=styled.textarea`
color:#fafafac2;
font-size:1.3em;

display:${props=>(props.activarElcomentario===false?"none":"display")};
width:95%;
border-radius:10px 10px 10px 10px;
padding:10px;
background-color:rgb(48, 47, 58);
outline:none;
resize:none;
border:none;
height:auto;
@media screen and (min-width: 1280px){
    height:110px;
}

`
export const SubComentarioFinalStyled=styled.textarea`
color:#fafafac2;
font-size:1.3em;

display:${props=>(props.activarElcomentario===false?"none":"display")};
padding:10px;
width:95%;
border-radius:10px 10px 10px 10px;
background-color:rgb(48, 47, 58);
outline:none;
resize:none;
border:none;

`
export const ComentarioFinalBlockStyled=styled.article`
color:#fafafac2;
font-size:1.3em;

display:${props=>(props.estadoActivoOdesactivo===true?"none":"display")};
width:100%;
padding:10px;
background-color:transparent;
outline:none;
resize:none;
border:none;
`
export const SubComentarioFinalBlockStyled=styled.article`
color:#fafafac2;
font-size:1.3em;

display:${props=>(props.estadoActivoOdesactivo===true?"none":"display")};
width:100%;
padding:10px;
background-color:transparent;
outline:none;
resize:none;
border:none;
`

export const ComentarioFinalizimaStyled=styled.div`
font-size:1.3em;
width:300px;
color:#fafafac2;

`