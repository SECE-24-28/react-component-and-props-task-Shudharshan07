function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function ProfileCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>React Components and Props</h1>
      
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
      
      
      <ProfileCard name="Alice" age="25" hobby="Reading" />
      <ProfileCard name="Bob" age="30" hobby="Coding" />
    </div>
  );
}

export default App;