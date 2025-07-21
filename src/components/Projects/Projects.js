import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SmartStore from "../../Assets/Projects/SS.png";
import prediction from "../../Assets/Projects/sound pred.png";
import cvuild from "../../Assets/Projects/cvuild.png";
import iSmishU from "../../Assets/Projects/ismishu.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Visit the GitHub links of each project to explore their functionality and documentation
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/*ISmishU*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iSmishU}
              isBlog={false}
              title="iSmishU"
              description="iSmishU is a smishing detection system specifically designed for Taglish (a mix of Tagalog and English). It leverages XLM-RoBERTa, a powerful multilingual language model, to analyze message content and classify it as either Smishing or Ham (legitimate). To enhance detection capabilities, the system integrates text classification using a fine-tuned XLM-RoBERTa model with URL analysis through the VirusTotal API."
              ghLink="https://github.com/CyrelDigang/iSmishU"
              
            />
          </Col>

          {/*cvuild */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvuild}
              isBlog={false}
              title="CVuild"
              description="CVuild is a Java-based desktop application that simplifies the resume-creation process for job seekers, students, professionals, freelancers, and career coaches. The program offers a simple, effective, and complete tool for writing professional resumes. CVuild's scope includes the establishment and management of user accounts, as well as the input of personal information such as schooling history, work experience, leadership activities, talents, and interests. Users can browse and download their resumes in document format. The software seeks to empower users by streamlining the resume preparation process, allowing them to successfully demonstrate their qualifications and advance their professional careers. "
              ghLink="https://github.com/CyrelDigang/CVuild"
             
            />
          </Col>

          {/*SmartStore*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartStore}
              isBlog={false}
              title="SmartStore"
              description="Smart Store is a simple inventory management system for a smartphone store. It supports full CRUD (Create, Read, Update, Delete) operations, allowing users to manage product listings efficiently within a MariaDB database."
              ghLink="https://github.com/CyrelDigang/Smart-Store"
                            
            />
          </Col>

          {/*Prediction*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prediction}
              isBlog={false}
              title="Music Sound Feature Prediction"
              description="This project explores the prediction and visualization of music sound features using a dataset sourced from **Spotify**. It applies data analysis and machine learning techniques to identify patterns in audio characteristics such as tempo, energy, danceability, and more."
              ghLink="https://github.com/CyrelDigang/Music-Sound-Feature-Prediction"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
