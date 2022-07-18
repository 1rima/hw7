import "./App.css";
import { Comment } from "./components/Comment";
import { comment } from "./data/data";

function App() {
  const comment = [
    {
    date: new Date(),
    id:1,
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    id:2,
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    id:3,
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  }
]


  return (
    <div className="app-block">
      {comment.map((item) =>(
         <Comment
        key={item.id}
        author={item.author}
        text={item.text}
        date={item.date}
        
      />   
      ))}
  
    </div>
  );
}
export default App;
