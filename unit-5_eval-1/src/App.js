import { Form } from "./Components/Form"
import './App.css';
import { Card } from "./Components/Cards"
function App() {
  return (
    <div className="App" id="app">
     <div id = "form">
       <h3 className="heading">Share your receipe</h3>
     <Form />
     </div>
     <div id = "cards">
       <h3 className="heading">Find new receipes</h3>
     <Card />
     </div>
    
    </div>
  );
}

export default App;
