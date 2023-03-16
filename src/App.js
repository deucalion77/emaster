import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Courses from './components/Grades';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Teach from './teach';
import Login from './login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teach" element={<Teach />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
