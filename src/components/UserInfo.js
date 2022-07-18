import Avatar from "./Avatar";
import CommentWrapper from "./CommentWrapper";
import "./UserInfo.css";


const UserInfo = (props) => {
  return (
    <div className="user-info">
      <CommentWrapper>
        <Avatar author={props.author} />
        <div className="Comment-text">{props.text}</div>
        {/* <div className='Comment-date'>{props.date.toLocaleDateString()}</div> */}
      </CommentWrapper>
    </div>
  );
};
export default UserInfo;
