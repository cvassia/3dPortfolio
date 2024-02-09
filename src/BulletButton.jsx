import React from "react";
import DrawerModal from "./Drawer";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ButtonWrapper = styled(Stack)`
  position: absolute;
  z-index: 4;
  top: ${(props) =>
    props.isLocatedInProjects
      ? "45%"
      : props.isLocatedInContact
      ? "250px"
      : "212px"};
  left: ${(props) => (props.isLocatedInProjects ? "75%" : "300px")};

  @media only screen and (max-width: 1293px) and (min-width: 200px) {
    top: ${(props) =>
      props.isLocatedInProjects
        ? "56px"
        : props.isLocatedInContact
        ? "103px"
        : "265px"};
    left: ${(props) => (props.isLocatedInProjects ? "60px" : "40px")};
  }
`;

const Header = styled(Stack)`
  color: #6c91b6;
  @media only screen and (max-width: 700px) and (min-width: 200px) {
    color: ${(props) => (props.isLocatedInAbout ? "#003766" : "#9bd2e8")};
  }
`;

   
const BulletButton = ({
  img,
  header,
  isLocatedInProjects,
  isLocatedInContact,
  isLocatedInAbout,
  state,
  setState,
}) => {

  console.log(isLocatedInContact);
  return (
    <>
      <ButtonWrapper
        direction="column"
        alignItems="flex-start"
        isLocatedInProjects={isLocatedInProjects}
        isLocatedInContact={isLocatedInContact}
      >
        <div
          className="object animate__animated animate__fadeIn"
          onClick={() => setState({ right: true })}
          onKeyDown={() => setState({ right: true })}
        >
          <img src={img} alt="" className="object__img" />
          <div className="wave animate__animated animate__zoomIn animate__infinite"></div>
        </div>
        <Header
          isLocatedInAbout={isLocatedInAbout}
          className="object__intro"
          onClick={() => setState({ right: true })}
          onKeyDown={() => setState({ right: true })}
        >
          <h1 className="object__intro-title">{header}</h1>
        </Header>
      </ButtonWrapper>
      <DrawerModal
        state={state}
        setState={setState}
        isLocatedInProjects={isLocatedInProjects}
        isLocatedInContact={isLocatedInContact}
        isLocatedInAbout={isLocatedInAbout}
      />
    </>
  );
};

export default BulletButton;
