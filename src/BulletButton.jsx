import React from "react";
import DrawerModal from "./Drawer";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled/macro";

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
 
@media only screen and (min-height:400px)  {
   top: ${(props) =>
     props.isLocatedInProjects
       ? "166px"
       : props.isLocatedInContact
       ? "103px"
       : "116px"};
    left: 41px;

}
  @media only screen and (max-width: 812px) and (min-width: 375px) {
    top: ${(props) =>
      props.isLocatedInProjects
        ? "166px"
        : props.isLocatedInContact
        ? "103px"
        : "383px;"};
    left: 41px;
`;

const Header = styled(Stack)`
 color: #6c91b6;
 @media only screen and (max-width: 700px) and (min-width: 375px) {
    color: ${(props) =>
      props.isLocatedInAbout
        ? "#003766"
        :  "#015ba8"
        };
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
