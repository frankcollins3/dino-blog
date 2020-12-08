import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header>
        <h1>{props.post.title}</h1>

        <p>by {props.post.author}</p>
        <p>by {props.post.body}</p>
        <h2>Comments</h2>
        <p>by {props.post.comments[2]}</p>
      </header>
    </div>
  );
}

export default App;
