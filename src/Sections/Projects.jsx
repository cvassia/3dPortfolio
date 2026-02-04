import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { projectItems } from "./helpers";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const GridWrapper = styled(Box)`
  color: #8296bc;
  margin: 80px;
  margin-top: 140px;
  font-family: roboto;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin: 26px;
    margin-top: 85px;
  }
`;

const Container = styled(Grid)`
  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    margin-bottom: 20px;
  }
`;

const Header = styled.p`
  font-size: 40px;
  margin: 0;
  font-family: Crops;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
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
  padding: 0.5rem 1rem;
  color: #99cbff;
  font-size: 15px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) and (min-width: 280px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

const CardText = styled(Card)`
  background-color: transparent;
  color: #8296bc;
`;

const CardWrapper = styled(Card)`
  border-radius: 18px;
  max-width: 520px;
  width: 100%;

  @media only screen and (max-width: 375px) and (min-width: 280px) {
    border-radius: 16px;
    height: 207px;
    width: 226px;
    margin-left: -10px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 375px) {
    border-radius: 16px;
    height: 207px;
    width: 358px;
    margin-left: -10px;
  }
`;

const CardImg = styled(CardMedia)`
  @media only screen and (max-width: 1024px) and (min-width: 280px) {
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

const StyledAccordion = styled(Accordion)`
  background-color: transparent !important;
  color: #8296bc !important;
  box-shadow: none !important;
  margin-top: 20px !important;
`;

const DetailsList = ({ title, items }) => (
  <>
    <Typography
      variant="subtitle1"
      sx={{ marginTop: 2, fontWeight: "bold", color: "#99cbff" }}
    >
      {title}
    </Typography>
    <ul style={{ textAlign: "left" }}>
      {items.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  </>
);

export const Projects = () => (
  <GridWrapper>
    <Container spacing={12} container>
      {projectItems.map((item, index) => (
        <React.Fragment key={index}>
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
            style={{
              textAlign: "-webkit-right",
            }}
          >
            <CardWrapper>
              <CardActionArea>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <CardImg
                    component="img"
                    image={item.image}
                    alt={item.header}
                  />
                </a>
              </CardActionArea>
            </CardWrapper>
          </Grid>

          <Text item sm={12} md={12} lg={6}>
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
                {item.stacks.map((button, i) => (
                  <Wrapper key={i}>
                    <StackButton>{button}</StackButton>
                  </Wrapper>
                ))}
              </Grid>

              {item.details && (
                <StyledAccordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Show Details</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography variant="body2" sx={{ textAlign: "left" }}>
                      {item.details.overview}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        marginTop: 2,
                        fontWeight: "bold",
                        color: "#99cbff",
                      }}
                    >
                      My Role
                    </Typography>

                    <Typography variant="body2" sx={{ textAlign: "left" }}>
                      {item.details.role}
                    </Typography>

                    <DetailsList
                      title="Architecture"
                      items={item.details.architecture}
                    />

                    <DetailsList
                      title="Key Features"
                      items={item.details.features}
                    />

                    <DetailsList
                      title="Challenges"
                      items={item.details.challenges}
                    />

                    <DetailsList
                      title="What I Learned"
                      items={item.details.learned}
                    />

                    {item.details.github && (
                      <>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            marginTop: 2,
                            fontWeight: "bold",
                            color: "#99cbff",
                          }}
                        >
                          Links
                        </Typography>

                        <Link
                          href={item.details.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub Repository
                        </Link>
                      </>
                    )}
                  </AccordionDetails>
                </StyledAccordion>
              )}
            </CardText>
          </Text>
        </React.Fragment>
      ))}
    </Container>
  </GridWrapper>
);
