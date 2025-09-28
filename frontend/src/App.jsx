import { Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar/>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path="/courses" element = {<h1 className = "text-center mt-5">Courses Page</h1>}/>
    </Routes>
    <Footer/>
    </div>
)
}
export default App;
