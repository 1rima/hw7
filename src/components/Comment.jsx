import UserInfo from "./UserInfo";
import { dateFormat } from "./general";
import CommentWrapper from "./CommentWrapper";
export const Comment = (props) => {
  

  return (
    <div className="Comment">
      <div className="user-infoo">
        <UserInfo author={props.author} />
      </div>
      <div className="comment-wrapper">
             <CommentWrapper >
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{dateFormat(props.date)}</div>
      </CommentWrapper>
      </div>
 

      
    </div>
  );
};
