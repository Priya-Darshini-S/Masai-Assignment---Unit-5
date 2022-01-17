

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Form } from "./components/Job"
import { PrivateRoute } from './routes/Privateroutes';
import { Items } from "./components/SeeJobs";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/see-jobs" element={<Items />}></Route>
        <Route path="*" element={<div>404 User Not found</div>}></Route>
        <Route path="/job-upload" 
          element={<PrivateRoute><Form /></PrivateRoute>}>
          
        </Route>

      </Routes>
    </div>
  );
}

export default App;
