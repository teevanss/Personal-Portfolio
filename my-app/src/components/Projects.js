import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BeeFit 2023",
      description: "A virtual pet website where users can take care of their pet by taking care themselves.",
      imgUrl: projImg5,
      link: "https://github.com/teevanss/BeeFit",
    },
    {
      title: "My Portfolio 2023",
      description: "My (Taylor Evans) Digital Portfolio.",
      imgUrl: projImg6,
      link: "https://taylor-evans-portfolio.onrender.com/",
    },
    {
      title: "MyLyfe 2023",
      description: "A social media website where users can track and complete goals. Users can also share their progress and show their support for others!",
      imgUrl: projImg1,
      link: "https://webdev.cse.buffalo.edu/hci/teams/aquafit",
    },
    {
      title: "TicketCity 2023",
      description: "A decentralized Ticketmaster application with the goal of eliminating price gouging using blockchain technology.",
      imgUrl: projImg2,
      link: "https://github.com/teevanss/TicketCity",
    },
    {
      title: "Strays in Tokyo 2022",
      description: "A chat application that includes account creation so that users can express themselves by uploading a profile picture and creating a username.",
      imgUrl: projImg4,
      link: "https://github.com/teevanss/Strays-in-Tokyo",
    },
    {
      title: "DuckyForms 2022",
      description: "A survery creation website where users can create, browse, and take surveys.",
      imgUrl: projImg3,
      link: "https://github.com/teevanss/DuckyForms",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} style = {{zIndex: "5"}}>
            <TrackVisibility>

              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>Hover over a card to read more about the project! You can also click on the card to visit its associated GitHub repository or website.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}