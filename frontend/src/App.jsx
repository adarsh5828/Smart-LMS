import Footer from "./components/layout/Footer.jsx";
import Navbar from './components/layout/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom';
import Register from "./pages/register.jsx";
import CourseDetailsPage from "./pages/courseDetailsPage.jsx";
import PrivateRoute from "./components/layout/privateRoute.jsx";  
import LearningPage from "./pages/learningPage.jsx";
import LessonPlayerPage from "./pages/lessonPlayerPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<h1 className="text-center mt-5">Courses Page</h1>} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learn/courses/:id" element={<LessonPlayerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
