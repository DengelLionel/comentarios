import { ReplyTextStyled } from "./css/ReplyTextStyled";
const Reply=({handleReply,handleId,handlesubcomentariosId,handleReplySubComentario})=>{
    const handleFinal=()=>{
        if(handleReply|| handleId){
            return handleReply(),handleId();
        }
        else if(handleReplySubComentario||handlesubcomentariosId){
            return handleReplySubComentario(),handlesubcomentariosId();
        }
    }
    return(
        <ReplyTextStyled onClick={()=>{handleFinal()}}>Reply</ReplyTextStyled>
    )
}
export default Reply;