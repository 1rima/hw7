import "./App.css";
import { Comment } from "./components/Comment";
import { comment } from "./data/data";

function App() {
  return (
    <div className="app-block">
      <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
        // img={comment.avatarUrl}
      ></Comment>
    </div>
  );
}
export default App;
