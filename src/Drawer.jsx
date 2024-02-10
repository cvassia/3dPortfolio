import React from "react";
import { Drawer } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Cv } from "./Sections/CV";
import { Projects } from "./Sections/Projects";
import { ContactForm } from "./Sections/Contact";

import { Box } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import styled from "styled-components";



const Text = styled(Box)`
  position: absolute;
  right: 76px;
  top: 72px;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 3px;
  transition: all 0.5s;
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  padding-right: 45px;
  text-transform: uppercase;
  backface-visibility: hidden;
  transform: rotate(-90deg);
  transition: transform 0.5s ease-in-out;
  @media only screen and (max-width: 1024px) and (min-width: 250px) {
    display: none;
  }
`;

const ExitButton = styled(ClearOutlinedIcon)`
  position: absolute;
  right: 38px;
  top:  32px;
  font-size: 13px;
  border: 1px solid #51779e;
  border-radius: 50%;
  padding: 30px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(-134deg);
    font-size: 20px;
    transition: transform 0.5s ease-in-out;
    ~ ${Text} {
      transform: rotate(0deg);
      transition: transform 0.5s ease-in-out;
      margin-right: 15px;
    }
  }
`;

const ExitButtonBottom = styled(ClearOutlinedIcon)`
  // position: relative;
  // bottom: 19px;
  // left: 144px;
  font-size: 13px;
  border: 1px solid #51779e;
  border-radius: 50%;
  padding: 24px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(-134deg);
    font-size: 20px;
    transition: transform 0.5s ease-in-out;
  }
`;

const DrawerModal = ({
  state,
  setState,
  isLocatedInAbout,
  isLocatedInContact,
  isLocatedInProjects,
  openAboutDrawer,
  openContactDrawer,
  openProjectsDrawer,
  setOpenAboutDrawer,
  setOpenProjectsDrawer,
  setOpenContactDrawer,
}) => {
  const muiTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paperAnchorTop: {
            paddingTop: 0,
          },
          paper: {
            backgroundColor: "#00022ddb",
            borderTopLeftRadius: "80px",
            borderBottomLeftRadius: "80px",
            color: "#E4DBDF",
            width: isLocatedInContact ? "80%" : "90%",
            overflowY: isLocatedInContact ? "visible" : "auto",
            // eslint-disable-next-line no-useless-computed-key
            // ["@media (max-height:768px)"]: {
            //   width: "90%",
            // },
            // eslint-disable-next-line no-useless-computed-key
            ["@media (min-width:280px)and (max-height: 690px)"]: {
              overflowY: "auto",
            },
          },
        },
      },
    },
  });


  return (
    <MuiThemeProvider theme={muiTheme}>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={() => {
          setState({ right: false });
          openAboutDrawer && setOpenAboutDrawer(false);
          openProjectsDrawer && setOpenProjectsDrawer(false);
          openContactDrawer && setOpenContactDrawer(false);
        }}
      >
        <Box
          onClick={() => {
            setState({ right: false });
            openAboutDrawer && setOpenAboutDrawer(false);
            openProjectsDrawer && setOpenProjectsDrawer(false);
            openContactDrawer && setOpenContactDrawer(false);
          }}
          onKeyDown={() => {
            setState({ right: false });
            openAboutDrawer && setOpenAboutDrawer(false);
            openProjectsDrawer && setOpenProjectsDrawer(false);
            openContactDrawer && setOpenContactDrawer(false);
          }}
        >
          <div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Box m={10}>
              <ExitButton />
              <Text>close</Text>
            </Box>
          </div>
        </Box>
        {isLocatedInAbout
          ? Cv(setState)
          : isLocatedInProjects
          ? Projects(setState)
          : isLocatedInContact && ContactForm(setState)}
        {(isLocatedInAbout || isLocatedInProjects) && (
          <Box
            style={{display: "flex",  justifyContent: "right",
  marginBottom: "20px",
  marginRight: "20px"}}
          onClick={() => {
            setState({ right: false });
            openAboutDrawer && setOpenAboutDrawer(false);
            openProjectsDrawer && setOpenProjectsDrawer(false);
            openContactDrawer && setOpenContactDrawer(false);
          }}
          onKeyDown={() => {
            setState({ right: false });
            openAboutDrawer && setOpenAboutDrawer(false);
            openProjectsDrawer && setOpenProjectsDrawer(false);
            openContactDrawer && setOpenContactDrawer(false);
          }}
        >
            <ExitButtonBottom />
          </Box>

        )}
      </Drawer>
    </MuiThemeProvider>
  );
};

export default DrawerModal;
