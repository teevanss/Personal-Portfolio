import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon1purple from "../assets/img/nav-icon1p.svg";
import navIcon2purple from "../assets/img/nav-icon2p.svg";

export const Footer = () => {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (

    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Taylor Evans &nbsp;</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

            <div className="social-icon" onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <a href="https://github.com/teevanss"><img src={open ? navIcon1purple : navIcon1} alt="GitHub link"/></a>
            </div>
            <div className="social-icon" onMouseOver={() => setOpen2(true)} onMouseOut={() => setOpen2(false)}>
                <a href="https://www.linkedin.com/in/taylor-evans-0992b9236/"><img src={open2 ? navIcon2purple : navIcon2} alt="" /></a>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}