import React from "react";
import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import { projectItems } from "./helpers";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const GridWrapper = styled(Box)`
  color: #8296bc;
  margin: 80px;
  margin-top: 140px;
  font-family: roboto;
  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    margin: 26px;
    margin-top: 85px;
  }
`;

const Container = styled(Grid)`
  @media only screen and (max-width: 1024px) and (min-width: 375px) {
  
    margin-bottom: 20px;
  }
`;

const Header = styled.p`
  font-size: 40px;
  margin: 0;
  font-family: Crops;
  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    font-size: 28px;
  }
`;
const Year = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-family: Crops;
`;
const Description = styled.p`
  font-size: 19px;
  margin: 0;
  margin-top: 40px;
  margin-bottom: 4px;
  line-height: 1.5;
`;
const DescriptionSecondLine = styled.p`
  font-size: 19px;
  margin: 0;
  margin-bottom: 30px;
  line-height: 1.5;
`;
const Text = styled(Grid)`
  text-align: end;
  font-size: 21px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 10px;
`;

const StackButton = styled.div`
  background-color: #51779e;
  border-radius: 35px;
  width: fit-content;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: #99cbff;
  font-size: 15px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

const CardText = styled(Card)`
  background-color: transparent;
  color: #8296bc;
`;

const CardWrapper = styled(Card)`
  border-radius: 30px;

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    border-radius: 16px;
    height: 207px;
    width: 358px;
    margin-left: -10px;
  }
`;

const CardImg = styled(CardMedia)`

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    height: 211px;
  }
`;

const Link = styled.a`
  color: #8296bc;
  text-decoration: none;
  &:hover {
    color: #1b3f83;
  }
`;

export const Projects = () => (
  <GridWrapper>
    <Container spacing={12} container>
      {projectItems.map((item) => (
        <>
          <Grid item  sm={12} md={12} lg={6} style={{  textAlign: "-webkit-right"
}}>
            <CardWrapper>
              <CardActionArea>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <CardImg
                    component="img"
                    // height="430"
                    image={item.image}
                    alt={item.header}
                  />
                </a>
              </CardActionArea>
            </CardWrapper>
          </Grid>
          <Text item  sm={12} md={12} lg={6}>
            <CardText>
              <Header>
                <Link href={item.url} target="_blank" rel="noreferrer">
                  {item.header}
                </Link>
              </Header>
              <Year>{item.year}</Year>
              <Description>{item.description}</Description>
              <DescriptionSecondLine>
                {item.descriptionSecondLine}
              </DescriptionSecondLine>
              <Grid
                sx={{
                  justifyContent: "flex-end",
                }}
                container
                spacing={1}
              >
                {item.stacks.map((button) => (
                  <Wrapper>
                    <StackButton>{button}</StackButton>
                  </Wrapper>
                ))}
              </Grid>
            </CardText>
          </Text>
        </>
      ))}
    </Container>
  </GridWrapper>
  //   <section id="projects">
  //     <div class="middle_line"></div>
  //     <article class="reveal-container">

  //     </article>
  //     <div class="middle_line"></div>
  //     <article class="reveal-container">
  //       <a href="http://varvaresos.cvassia.com">
  //         <img src="../pictures/varvares.jpg" alt="actor" />
  //       </a>
  //       <h6 >2019</h6>
  //       <h5 >weather app</h5>
  //     </article>
  //     <div class="middle_line"></div>
  //     <article class="reveal-container">
  //       <a href="https://spyrosmarkopoulos.cvassia.com">
  //         <img src="../pictures/markopoulos.jpg" alt="markopoulos" />
  //       </a>
  //       <h6 >2019</h6>
  //       <h5 >actor's website</h5>
  //     </article>
  //     <div class="middle_line"></div>
  //     <article class="reveal-container">
  //       <a href="greece.html">
  //         <img src="../pictures/greece.jpg" alt="greece" />
  //       </a>
  //       <h6 >2019</h6>
  //       <h5 >greece website</h5>
  //     </article>
  //     <div class="middle_line"></div>
  //     <article class="reveal-container">
  //       <a href="https://landingpage.cvassia.com">
  //         <img src="../pictures/landing-page.jpg" alt="landing page" />
  //       </a>
  //       <h6 >2019</h6>
  //       <h5 >landing page</h5>
  //     </article>
  //     <div class="middle_line"></div>
  //     <article class="reveal-container">
  //       <a href="https://todo.cvassia.com">
  //         <img src="../pictures/toDo.jpg" alt="to do list" />
  //       </a>
  //       <h6 >2019</h6>
  //       <h5 >to do list app</h5>
  //     </article>
  //   </section>
);
