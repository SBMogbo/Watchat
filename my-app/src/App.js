import react from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/signup/signUp"
// import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
   
    <div className="App">
        <Navbar />
        <SignUp/>
    </div>
  );
}

export default App;
