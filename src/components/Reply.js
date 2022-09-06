import { ReplyTextStyled } from "./css/ReplyTextStyled";
const Reply=({handleReply,handleId})=>{
    return(
        <ReplyTextStyled onClick={()=>{handleReply();handleId()}}>Reply</ReplyTextStyled>
    )
}
export default Reply;