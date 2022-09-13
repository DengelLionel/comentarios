import { ReplyTextStyled } from "./css/ReplyTextStyled";
const Reply=({handleReply,handleId,handlesubcomentariosId,handleReplySubComentario,handleIdComentarioParaSubComentario})=>{
    const handleFinal=()=>{
        if(handleReply|| handleId){
            return handleReply(),handleId();
        }
        else if(handleReplySubComentario||handlesubcomentariosId){
            return handleReplySubComentario(),handlesubcomentariosId(),handleIdComentarioParaSubComentario();
        }
    
            
        
    }
    return(
        <ReplyTextStyled onClick={()=>{handleFinal()}}>Reply</ReplyTextStyled>
    )
}
export default Reply;