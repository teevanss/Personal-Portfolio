import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon1purple from "../assets/img/nav-icon1p.svg";
import navIcon2purple from "../assets/img/nav-icon2p.svg";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  {/* To change background color */}
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Brand href="/">
            <h1>Taylor Evans</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <span className="navbar-text">

              <div className="social-icon" onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <a href="https://github.com/teevanss"><img src={open ? navIcon1purple : navIcon1} alt="GitHub link"/></a>
              </div>
              <div className="social-icon" onMouseOver={() => setOpen2(true)} onMouseOut={() => setOpen2(false)}>
                <a href="https://www.linkedin.com/in/taylor-evans-0992b9236/"><img src={open2 ? navIcon2purple : navIcon2} alt="" /></a>
              </div>

              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  )
}