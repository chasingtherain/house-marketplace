import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import {ToastContainer} from 'react-toastify'
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Explore/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/profile" element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path ="/*" element={<NotFound/>}/>
        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
