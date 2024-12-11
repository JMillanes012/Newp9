import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use BrowserRouter instead of Router
import Navbar from './components/navbar.jsx';  // Assuming navbar.jsx is in the components folder
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the page components
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';  
import Hobbies from './pages/Hobbies.jsx';  
import Contact from './pages/Contact.jsx'; 
import Education from './pages/Education.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />  
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </Router>
  );
}

export default App;
