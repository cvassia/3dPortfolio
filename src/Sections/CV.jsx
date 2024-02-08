import React from "react";
import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const GridWrapper = styled(Box)`
  color: #8296bc;
  margin: 80px;
  margin-top: 140px;
  font-family: roboto;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    margin: 31px;
    margin-top: 37px;
    // text-align: right;
  }
`;

const Header = styled.p`
  letter-spacing: 2;
  margin-bottom: 5px;
  font-size: 28px;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
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

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    font-size: 17px;
    margin-top: ${(props) => (props.isFirst ? "29px" : "-59px")};
  }
`;
const Paragraph = styled.p`
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    margin-bottom: 0px;
    font-size: 15px;
  }
`;



const Title = styled.p`
  letter-spacing: 2;
  margin-bottom: 5px;
  font-size: 28px;
  color: ${highlightColor};

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    font-size: 24px;
    margin-top: ${(props) => (props.isEducation ? "47px" : props.isSkills? "-52px": props.isFreelance ? "25px": props.isSoftSkills? "-43px" : "-38px")};
  }
`;

const JobTitle = styled.p`
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 20px;
  color: ${highlightColor};
  line-height: 30px;
  text-align: justify;
  

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    font-size: 18px;
    margin-top: 42px;
  }
`;

const JobDescription = styled.p`
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    margin-bottom: 0;
    font-size: 15px;
    margin-top: 0
  }
`;

const SkillsDescription = styled.p`
  letter-spacing: 2;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  width: 90%;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    margin-bottom: 0px;
    font-size: 17px;
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
            based in Berlin, with over 4 years of experience, leveraging a
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
            {/* based in Berlin, with over 4 years of experience, leveraging a
            unique background in architecture and a master’s degree in set
            design. My art & design background alongside my development
            experience gives me the capability to seamlessly navigate a project
            from its conceptualization and design phase to its full
            implementation. I possess a skill set that enables me to craft
            comprehensive strategies and visions for products. This expertise
            extends to articulating these strategies through short and long-term
            product roadmaps, carefully prioritizing features based on their
            level of importance and the time required for execution.
            Additionally, I excel in the domain of user research, with a
            proficiency in planning, conducting, and analyzing high-quality
            research initiatives. I bring to the table a demonstrated ability to
            translate concepts into tangible forms through sketching,
            wireframing, and prototyping. Furthermore, my strong proficiency in
            motion graphics and animations further enriches my skill set,
            allowing for dynamic and engaging user experiences. Interested in
            the entire frontend spectrum and working on ambitious projects with
            interesting people. */}
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
      <Grid item sm={12} md={12} lg={6}>
        <Box>
          <Title isSkills>Skills </Title>
          <SkillsDescription>
            Proficient in{" "}
            <strong style={differentColor}>
              React • JavaScript (ES6+) • TypeScript • Remix • NodeJS • Vite •
              MongoDB • HTML5 • CSS • Sass • Tailwind • Storybook
            </strong>
            .
          </SkillsDescription>
          <SkillsDescription>
            Strong knowledge of{" "}
            <strong style={differentColor}>
              Redux • React Router • and other related libraries
            </strong>
            .
          </SkillsDescription>
          <SkillsDescription>
            Familiarity with build tools like{" "}
            <strong style={differentColor}>Webpack • Babel • NPM/Yarn</strong>.
          </SkillsDescription>
          <SkillsDescription>
            Git version control and collaborative tools{" "}
            <strong style={differentColor}>GitHub • Bitbucket</strong>.
          </SkillsDescription>
          <SkillsDescription>
            Ability to create a strategy/vision for a product • convey that
            strategy in the form of a short- and long-term product roadmap •
            prioritizing features based on level of importance and time to
            execute.
          </SkillsDescription>

          <SkillsDescription>
            Planning • conducting • analyzing quality user research.
          </SkillsDescription>
          <SkillsDescription>
            Sketching • creating wireframes • prototyping{" "}
            <strong style={differentColor}>Affinity Designer • Figma</strong>.
          </SkillsDescription>
          <SkillsDescription>
            Strong skills with motion graphics and animations.{" "}
            <strong style={differentColor}>Cinema 4D • Blender</strong>.
          </SkillsDescription>
          <SkillsDescription>
            Familiar with unit testing using{" "}
            <strong style={differentColor}>Jest </strong>.
          </SkillsDescription>
          <SkillsDescription>
            {" "}
            <strong style={differentColor}>Docker</strong>{" "}
          </SkillsDescription>
          <SkillsDescription>
            {" "}
            <strong style={differentColor}>WordPress</strong>{" "}
          </SkillsDescription>
        </Box>
      </Grid>
      <Grid item sm={12} md={12} lg={6} style={{ marginBottom: "25px" }}>
        <Box>
          <Title isSoftSkills>Shoft Skills </Title>
          <JobDescription>
            <strong style={differentColor}>Adaptability: </strong> Quick to
            embrace emerging technologies and methodologies, consistently
            staying at the forefront of trends.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Problem Solving: </strong> Analyzing
            intricate technical challenges and implementing solutions. This
            capability has played a vital role in optimizing code functionality
            and resolving issues efficiently.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Critical Thinking:</strong>{" "}
            Evaluating complex technical scenarios objectively, considering
            multiple perspectives and making informed decisions in order to
            optimize development processes.
          </JobDescription>
          <JobDescription>
            <strong style={differentColor}>Attention to Detail: </strong>{" "}
            Meticulous in ensuring accuracy, functionality, and adherence to
            project specifications.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Communication: </strong> Adept at
            articulating complex technical concepts in a clear and
            understandable manner, ensuring effective collaboration with team
            members, and clients.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Teamwork: </strong> I am working
            closely with UI/UX designers and back-end developers to deliver
            cohesive and user-centric applications.{" "}
          </JobDescription>{" "}
          <JobDescription>
            <strong style={differentColor}>Self-organized</strong> and able to
            work independently.
          </JobDescription>{" "}
          <JobDescription>
            Motivated to take on{" "}
            <strong style={differentColor}>new challenges.</strong>{" "}
          </JobDescription>{" "}
          <JobDescription>
            Open to receive and deliver{" "}
            <strong style={differentColor}>clear and useful criticism.</strong>{" "}
          </JobDescription>
        </Box>
      </Grid>
    </Grid>
  </GridWrapper>
);




