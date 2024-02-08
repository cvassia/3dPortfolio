/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const NavigationButtonWrapper = styled(Box)`
  position: absolute;
  top: ${(props) =>
    props.isInAboutPosition
      ? "84%"
      : props.isInProjectsPosition
      ? "80%"
      : props.isInContactPosition
      ? "80%"
      : "50%"};
  left: ${(props) =>
    props.isInAboutPosition
      ? "40%"
      : props.isInProjectsPosition
      ? "55%"
      : "50%"};
  z-index: 1000;
  transform: ${(props) =>
    props.isInAboutPosition
      ? "rotate(265deg)"
      : props.isInProjectsPosition
      ? "rotate(45deg)"
      : props.isInContactPosition && "rotate(150deg)"};
  @media only screen and (max-width: 812px) and (min-width: 375px) {
    top: ${(props) =>
      props.isLocatedInProjects
        ? "55%"
        : props.isLocatedInContact
        ? "50%"
        : "79%"};
  }
`;

const NavigationButton = ({
  setClick,
  isInAboutPosition,
  isInProjectsPosition,
  isInContactPosition,
}) => {
  return (
    <NavigationButtonWrapper
      isInAboutPosition={isInAboutPosition}
      isInProjectsPosition={isInProjectsPosition}
      isInContactPosition={isInContactPosition}
      onClick={() => setClick(true)}
    >
      <a href="#" class="to-top"></a>
    </NavigationButtonWrapper>
  );
};

export default NavigationButton;
