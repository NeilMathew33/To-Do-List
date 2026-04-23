import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddToDo from './Components/AddToDo';
import ViewAllTodos from './Components/ViewAllTodos';
import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/Add" element={<AddToDo />} />
    <Route path="/ViewAll" element={<ViewAllTodos />} />
    <Route path="/" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
