import logo from './logo.svg';
import './App.css';
import Header from './pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Banner from './pages/Home/Header/Banner/Banner';
import Login from './pages/Login/Login/Login';

import Chackout from './pages/Home/Chackout/Chackout';
import Signup from './pages/Login/Signup/Signup';



function App() {
  return (
    <div className="gym-service">
     <Header></Header>
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/chackout' element={<Chackout></Chackout>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       
       
     </Routes>
    </div>
  );
}

export default App;
