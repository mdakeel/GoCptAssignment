
import './App.css';
import Contact from './components/Contact/Contact';
import Contribute from './components/Contribute';
import Feature from './components/Features/Feature';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import WhyGocpt from './components/WhyGocpt';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import ForgotPassword from './components/User/ForgotPassword';
import Profile from './components/User/Profile';
import { ThemeProvider } from './components/ThemeToggle';

function App() {
  return (
    <div className=" ">
     <Router>
     <ThemeProvider>
      <Routes>
      <Route path='/' element={
        <>
        <Home />
      <Feature />
      <WhyGocpt />
      <Contribute />
      <Contact />
      <Footer />
        </>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={ <SignUp /> } />
      <Route path='/changepassword' element={ <ForgotPassword /> } />
      <Route path='/profile' element={ <Profile /> } />
      </Routes>
      </ThemeProvider>
     </Router>
      
    </div>
  );
}

export default App;
