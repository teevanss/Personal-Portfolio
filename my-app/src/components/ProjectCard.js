import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {

  const parseLink = link.replace('"', '')
  return (

    <Col size={11} sm={6} md={5}> 
    <a href={parseLink}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a> 
    </Col>
  )
}