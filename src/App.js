import logo from './logo.svg';
import './App.css';
import Header from './pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Banner from './pages/Home/Header/Banner/Banner';
import Login from './pages/Login/Login/Login';

import Chackout from './pages/Home/Chackout/Chackout';
import Signup from './pages/Login/Signup/Signup';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Blogs from './pages/Home/Blogs/Blogs';
import About from './pages/Home/About/About';
import PageNotFound from './pages/Utilitis/PageNotFound/PageNotFound';
import Footer from './pages/Home/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Dashborad from './pages/Dashboard/Dashborad';
import MyBookin from './pages/Dashboard/MyBookin';
import Review from './pages/Dashboard/Review';
import AllUser from './pages/Dashboard/AllUser';
import RequireAdmin from './pages/Login/Login/RequireAdmin';



function App() {
  return (
    <div className="gym-service">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/chackout/:id' element={
          <RequireAuth>
            <Chackout></Chackout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/Dashboard' element={<Dashborad></Dashborad>}>
          <Route path='/Dashboardmybooking' element={<MyBookin/>}></Route>
          <Route path='/Dashboard/review' element={<Review/>}></Route>
          <Route path='/Dashboard/user' element={<RequireAdmin>
            <AllUser/>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>


      </Routes>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      
    </div>
  );
}

export default App;
