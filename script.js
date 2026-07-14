npm create vite@latest my-react-app
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>This is my first React application.</p>
    </div>
  );
}

export default App;
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <Greeting />
    </div>
  );
}

export default App;
