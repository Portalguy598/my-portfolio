import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // handles part of redirection so nav links redirect to the main page if in blog
  const handleRedirect = (elementID) => {
    // set state to indicate which element should be scrolled to on the home page
    navigate('/', { state: { targetId: elementID}});
  }

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">MyPortfolio</Link>
        <div className="nav-links">
          <p onClick={() => handleRedirect('about')}>About</p>
          <p onClick={() => handleRedirect('projects')}>Projects</p>
          <p onClick={() => handleRedirect('contact')}>Contact</p>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;