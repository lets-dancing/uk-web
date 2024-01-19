import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from "react-router-dom";
import "./main/Main.css";
import "./NavBar.css"
import logo from "./media/uk-logo.png"
import { useEffect, useState } from "react";
import About from "./about/About";
import Projects from "./projects/Projects";
import Main from "./main/Main";
import News from "./news/News";
import Services from "./services/Services";

function NavBar() {
    const [showLinks, setShowLinks] = useState(false);

    function closeMenu() {
        setShowLinks(false);
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.hamburgerMenu') || e.target.closest('.hamburger')) return;
            setShowLinks(false);
        });
    }, []);

    return (
        <Router>
            <div className="NavBar-container">
                <nav>
                <div className="nav-container">
                    <div className="nav-item">
                    <Link to="/about" className='nav-links' >про нас</Link>
                    </div>
                    <div className="nav-item">
                    <Link to="/projects" className='nav-links' >про проекты</Link>
                    </div>
                    <Link to='/' className="link"><img className="logo-img" src={logo} alt="logo"></img></Link> 
                    <div className="nav-item">
                    <Link to="/news" className='nav-links' >про новости</Link>
                    </div>
                    <div className="nav-item">
                    <Link to="/services" className='nav-links' >про услуги</Link>
                    </div>
                </div>
                <div className="hamburger">
                    <button onClick={() => setShowLinks(!showLinks)}>☰</button>
                </div>
                {showLinks && (
                <div className={`hamburgerMenu ${showLinks ? 'show' : ''}`}>
                    <Link to="/about" className='link' onClick={closeMenu}>про нас</Link>
                    <Link to="/projects" className='link' onClick={closeMenu}>про проекты</Link>
                    <Link to="/news" className='link' onClick={closeMenu}>про новости</Link>
                    <Link to="/services" className='link' onClick={closeMenu}>про услуги</Link>
                </div>
                )}
                </nav>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/" element={<Main />} />
                <Route path="/news" element={<News />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
    );
}

export default NavBar;