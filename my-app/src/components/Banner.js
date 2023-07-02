import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Typed from 'react-typed';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';

export const Banner = () => {

  return ( 
    
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>

              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Taylor`}<br></br>
                <Typed strings={["Web Developer", "Web Designer", "Software Engineer"]} typeSpeed={70} backSpeed={40} backDelay={3000} loop/></h1>

                <p>I'm a 23 year old graduate from the University at Buffalo. 
                I've recently moved from New York to Texas! 
                I have a Bachelor of Science degree in computer science. 
                Web design combines my two favorite hobbies: coding and art!</p>

                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}

            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>

              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}

            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
