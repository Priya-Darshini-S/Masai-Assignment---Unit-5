import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { PrivateRoute } from './routes/PrivateRoutes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" 
          element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          
        </Route>

        <Route path="/dashboard/settings" 
            element={<PrivateRoute><Settings /></PrivateRoute>}>
        </Route>


        <Route path="*" element={<div>404 User Not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;