import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav-Bar/NavBar';
import Category from './Pages/Category/Category';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import SignIn from './Pages/Sign-In/SingIn';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/Shop'
          element={<Shop />}
        />
        <Route
          path='/SignIn'
          element={<SignIn />}
        />
        <Route
          path='/checkOut'
          element={<CheckOut/>}
        /> 
         <Route
          path='/Shop/:category'
          element={<Category/>}
        /> 
      </Routes>

    </>
  );
};

export default App;
