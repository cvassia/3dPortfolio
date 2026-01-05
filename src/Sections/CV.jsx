import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const GridWrapper = styled(Box)`
  color: #8296bc;
  margin: 80px;
  margin-top: 140px;
    font-family: Roboto, sans-serif !important;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin: 31px;
    margin-top: 37px;
  }
`;

const Header = styled.p`
  letter-spacing: 2;
  margin-bottom: 5px;
  font-size: 28px;
    font-family: Roboto, sans-serif !important;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    font-size: 23px;
    margin-top: 0;
    text-align: left;
  }
`;


const highlightColor = "#007fff";



const Description = styled.p`
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 30px;
  font-family: Crops;
  color: ${highlightColor};
  width: 90%;
  margin-top: ${(props) => props.projectApproach && "140px"};

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    font-size: 17px;
    margin-top: ${(props) => (props.isFirst ? "29px" : "-59px")};
    text-align: left;
  }
`;
const Paragraph = styled.p`
    font-family: Roboto, sans-serif !important;
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin-bottom: 0px;
    font-size: 15px;
    text-align: left;
  }
`;



const Title = styled.p`
    font-family: Roboto, sans-serif !important;
  letter-spacing: 2;
  margin-bottom: 5px;
  font-size: 28px;
  color: ${highlightColor};

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    font-size: 24px;
    margin-top: ${(props) =>
    props.isEducation
      ? "47px"
      : props.isSkills
        ? "-52px"
        : props.isFreelance
          ? "25px"
          : props.isSoftSkills
            ? "-43px"
            : "-38px"};
    text-align: left;
  }
`;

const JobTitle = styled.p`
    font-family: Roboto, sans-serif !important;
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 20px;
  color: ${highlightColor};
  line-height: 30px;
  text-align: justify;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    font-size: 18px;
    margin-top: 42px;
    text-align: left;
  }
`;

const JobDescription = styled.p`
    font-family: Roboto, sans-serif !important;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin-bottom: 0;
    font-size: 15px;
    margin-top: 0;
    text-align: left;
  }
`;
const SkillsTitle = styled.p`
  font-family: Roboto, sans-serif !important;
  letter-spacing: 2;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin-bottom: 0px;
    font-size: 19px;
    text-align: left;
  }
`;

const SkillsDescription = styled.p`
    font-family: Roboto, sans-serif !important;
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin-bottom: 0px;
    font-size: 17px;
    text-align: left;
  }
`;

const differentColor = {
  color: highlightColor
};

const phasesStyle = {
  fontSize: "19px",
  color: highlightColor,
};

export const Cv = () => (
  <GridWrapper sx={{ flexGrow: 1 }}>
    <Grid container spacing={12}>
      <Grid item sm={12} md={12} lg={6}>
        <Box>
          <Header>Hi, I am</Header>
          <Header>Vassia Christopoulou</Header>

          <Description isFirst>
            I build intuitive interfaces and digital experiences for the web.
          </Description>
          <Paragraph>
            Dedicated{" "}
            <strong style={differentColor}>React FrontEnd Developer </strong>{" "}
            based in Berlin, with over 7 years of experience, leveraging a
            unique background in architecture and a master’s degree in set
            design. My{" "}
            <strong style={differentColor}>art & design background </strong>
            alongside my coding experience equips me with a distinctive set of
            abilities to efficiently navigate a project from its initial
            <strong style={differentColor}> conceptualization phase </strong>
            to its <strong style={differentColor}>full implementation</strong>.
            Passionate for the entire frontend spectrum and thrilled to be
            challenged in ambitious projects collaborating with interesting
            people.
          </Paragraph>
        </Box>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Box>
          <Description projectApproach>How I tackle a project</Description>
          <Paragraph>
            <strong style={phasesStyle}>Research phase -- </strong>I immerse
            myself in understanding the client’s subject matter, building an
            intimate knowledge base.
          </Paragraph>

          <Paragraph>
            <strong style={phasesStyle}>Design phase -- </strong>I perceive it
            as a cross-functional process. I bring to the table a demonstrated
            ability to translate concepts into tangible forms through sketching,
            wireframing, and prototyping.
          </Paragraph>

          <Paragraph>
            <strong style={phasesStyle}>Development phase -- </strong>
            Building on the knowledge from the two prior stages I produce
            commercial products tailored precisely to the client’s vision. My
            strong proficiency in motion graphics and animations further
            enriches my skill set, allowing for dynamic and engaging user
            experiences.
          </Paragraph>

          <Paragraph>
            Throughout the project, I articulate my approach through short and
            long-term product roadmaps, carefully prioritizing features based on
            their level of importance and the time required for their execution.
          </Paragraph>
        </Box>
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <Box>
          <Title isSkills>Tech Stack </Title>
          <SkillsTitle>
            Languages
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              TypeScript • JavaScript (ES6+)
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            Frontend
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              React • State Management: Context API, Redux • Routing: React Router, Next.js (SSR / SSG) • Form Handling: React Hook Form, Formik • Testing: Jest (Unit & Integration) • Component-driven development: Storybook • Mobile: React Native (Expo)
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            Styling
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              CSS, Sass, Less • Tailwind CSS • CSS-in-JS: Styled Components, Emotion • UI Libraries: Material-UI
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            State, Data & Auth
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              REST & GraphQL API consumption • Authentication & authorization flows: JWT, OAuth • Internationalization: i18n / react-i18next
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            Backend
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              Node.js (Express / API development) • Prisma (ORM, schema design, migrations) • MongoDB
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            Backend Services & Cloud
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              AWS (S3, basic deployment, environment setup) • Appwrite (Auth, Database, Storage, Functions)
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            Build Tools & Version Control
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              Webpack, Babel, NPM/Yarn • Docker (containerization) • Git, GitHub, Bitbucket
            </strong>
          </SkillsDescription>
          <SkillsTitle>
            Design / Collaboration
          </SkillsTitle>
          <SkillsDescription>
            <strong style={differentColor}>
              Figma, UI/UX collaboration & design handoff • Affinity Designer
            </strong>
          </SkillsDescription>
        </Box>
      </Grid>
      <Grid item sm={12} md={12} lg={6} style={{ marginBottom: "25px" }}>
        <Box>
          <Title isSoftSkills>Soft Skills </Title>
          <JobDescription>
            <strong style={differentColor}>Adaptability & Motivation: </strong> Quickly embrace new technologies and methodologies; proactive in taking on challenges.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Problem Solving & Critical Thinking: </strong> Analyze complex technical issues, implement efficient solutions, considering
            multiple perspectives, making informed decisions and optimize code functionality.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Attention to Detail: </strong>{" "}
            Ensure accuracy, usability, and adherence to project specifications in frontend development.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Collaboration & Communication:</strong> Adept at
            articulating complex technical concepts in a clear and
            understandable manner, ensuring effective collaboration with team
            members, and clients. Work closely with UI/UX designers and backend developers.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Self-Management:</strong> Highly organized, independent, and open to constructive feedback to continuously improve outcomes.
          </JobDescription>{" "}
          <JobDescription>
            Open to receive and deliver{" "}
            <strong style={differentColor}>clear and useful criticism.</strong>{" "}
          </JobDescription>
        </Box>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Box>
          {" "}
          <Title>Professional Experience</Title>
          <JobTitle>
            Front End Developer | HRlab GmbH, Berlin | Nov 2020 - Present
          </JobTitle>
          <JobDescription>
            • Contributed to the development of responsive and user-friendly web
            applications using <strong style={differentColor}> React</strong>,
            resulting in a 25% increase in user engagement.
          </JobDescription>
          <JobDescription>
            • Collaborated closely with UI/UX designers to implement{" "}
            <strong style={differentColor}> design mockups </strong>
            and ensure seamless integration of user interface elements.
          </JobDescription>
          <JobDescription>
            • Participated in code reviews, contributing to team productivity
            and code quality.
          </JobDescription>
          <JobDescription>
            • Streamlined application performance and load times through the
            seamless integration of{" "}
            <strong style={differentColor}> RESTful APIs </strong> for data
            management, alongside the development of optimized code, efficiently
            handling <strong style={differentColor}> large datasets </strong> by
            rendering components on the UI and minimizing HTTP requests.
          </JobDescription>
          <JobDescription>
            • Leveraged{" "}
            <strong style={differentColor}>
              {" "}
              advanced JavaScript techniques{" "}
            </strong>{" "}
            to craft a cross-browser compatible user interface, ensuring
            seamless interaction and optimal
            <strong style={differentColor}> user experience</strong>.
          </JobDescription>
          <JobDescription>
            • Conducted daily maintenance of code, debugging issues, and
            proactively solved client problems, ensuring smooth operation of
            applications.
          </JobDescription>
          <JobTitle>
            Front End Developer | Joyce, Berlin | Feb 2020 - Sep 2020
          </JobTitle>
          <JobDescription>
            • Implemented{" "}
            <strong style={differentColor}> responsive design </strong>{" "}
            techniques to enhance the mobile experience.
          </JobDescription>
          <JobDescription>
            • Collaborated with back end developers to ensure seamless
            integration of front end systems.
          </JobDescription>
          <JobDescription>
            • Implemented the design for various client projects by creating
            <strong style={differentColor}> custom pages and interfaces</strong>
            , contributing to a tailored user experience for each client.
          </JobDescription>
        </Box>
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <Box>
          <Title isFreelance>Freelance Projects</Title>
          <JobDescription>
            • Successfully delivering custom websites for various clients,
            showcasing versatility in{" "}
            <strong style={differentColor}> design and development </strong>
            approaches. Each project involved full-cycle{" "}
            <strong style={differentColor}> management, </strong>
            including
            <strong style={differentColor}> planning, </strong>
            <strong style={differentColor}>
              {" "}
              design, building, launching,{" "}
            </strong>
            and ongoing <strong style={differentColor}> maintenance</strong>.
            Consistently delivered high-quality, robust production code for a
            diverse array of projects, ensuring client satisfaction and project
            success.
          </JobDescription>
          <Title isEducation>Education </Title>
          <JobDescription>
            Web Development Course, DCI Berlin, Germany.
          </JobDescription>
          <JobDescription>
            Master of Arts in Set Design and Scenography, TU Berlin, Germany.
          </JobDescription>
          <JobDescription>
            BA Architecture, University of Patras, Greece.
          </JobDescription>
        </Box>
      </Grid>

    </Grid>
  </GridWrapper>
);




