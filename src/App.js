import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddToDo from './Components/AddToDo';
import ViewAllTodos from './Components/ViewAllTodos';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddToDo />} />
    <Route path="/ViewALl" element={<ViewAllTodos />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
