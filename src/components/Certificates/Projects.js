import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AWS from "../../Assets/CertPic/AWS Cloud Practitioner.png";
import IntroGenAI from "../../Assets/CertPic/Introduction to Generative AI.png";
import largeLang from "../../Assets/CertPic/Introduction to Large Language Models.png";
import IntroResponAI from "../../Assets/CertPic/Introduction to Responsible AI.png";
import proMLE from "../../Assets/CertPic/Professional Machine Learning Engineer Study Guide.png";
import promptDesign from "../../Assets/CertPic/Prompt Design in Vertex AI.png";
import responAI from "../../Assets/CertPic/Responsible AI.png";


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

          {/*AWS*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AWS}
              isBlog={false}
              title="AWS Cloud Quest: Cloud Practitioner - Training Badge"
              description="Earners of this badge have demonstrated basic solution building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database and security services."
              ghLink="https://www.credly.com/badges/7e66a0d5-811e-4860-828c-3a1297ee40ef/public_url"
              
            />
          </Col>

          {/*Professional Machine Learning Engineer*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proMLE}
              isBlog={false}
              title="Professional Machine Learning Engineer Study Guide"
              description="This course helps learners create a study plan for the PMLE (Professional Machine Learning Engineer) certification exam. Learners explore the breadth and scope of the domains covered in the exam. Learners assess their exam readiness and create their individual study plan."
              ghLink="https://www.cloudskillsboost.google/public_profiles/2714d015-40b6-49d6-a2ee-a46d9005f9b3/badges/14183697"
              
            />
          </Col>

          {/*Prompt Design*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptDesign}
              isBlog={false}
              title="Prompt Design in Vertex AI"
              description="Complete the introductory Prompt Design in Vertex AI skill badge to demonstrate skills in the following: prompt engineering, image analysis, and multimodal generative techniques, within Vertex AI. Discover how to craft effective prompts, guide generative AI output, and apply Gemini models to real-world marketing scenarios."
              ghLink="https://www.cloudskillsboost.google/public_profiles/2714d015-40b6-49d6-a2ee-a46d9005f9b3/badges/14094380"
              
            />
          </Col>

          {/*IntroGEnAi*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntroGenAI}
              isBlog={false}
              title="Introduction to Generative AI"
              description="This is an introductory level microlearning course aimed at explaining what Generative AI is, how it is used, and how it differs from traditional machine learning methods. It also covers Google Tools to help you develop your own Gen AI apps."
              ghLink="https://www.cloudskillsboost.google/public_profiles/2714d015-40b6-49d6-a2ee-a46d9005f9b3/badges/14072196"
              
            />
          </Col>

          {/*Intro to Large Language Model*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={largeLang}
              isBlog={false}
              title="Introduction to Large Language Models"
              description="This is an introductory level micro-learning course that explores what large language models (LLM) are, the use cases where they can be utilized, and how you can use prompt tuning to enhance LLM performance. It also covers Google tools to help you develop your own Gen AI apps."
              ghLink="https://www.cloudskillsboost.google/public_profiles/2714d015-40b6-49d6-a2ee-a46d9005f9b3/badges/14072734"
              
            />
          </Col>

          {/*Intro to Responsible AI*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntroResponAI}
              isBlog={false}
              title="Introduction to Responsible AI"
              description="This is an introductory-level microlearning course aimed at explaining what responsible AI is, why it's important, and how Google implements responsible AI in their products. It also introduces Google's 3 AI principles."
              ghLink="https://www.cloudskillsboost.google/public_profiles/2714d015-40b6-49d6-a2ee-a46d9005f9b3/badges/14076861"
              
            />
          </Col>

          {/*Responsible AI: Applying AI Principles with Google Cloud*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={responAI}
              isBlog={false}
              title="Responsible AI: Applying AI Principles with Google Cloud"
              description="As the use of enterprise Artificial Intelligence and Machine Learning continues to grow, so too does the importance of building it responsibly. A challenge for many is that talking about responsible AI can be easier than putting it into practice. If you’re interested in learning how to operationalize responsible AI in your organization, this course is for you. In this course, you will learn how Google Cloud does this today, together with best practices and lessons learned, to serve as a framework for you to build your own responsible AI approach."
              ghLink="https://www.cloudskillsboost.google/public_profiles/2714d015-40b6-49d6-a2ee-a46d9005f9b3/badges/14123419"
              
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
