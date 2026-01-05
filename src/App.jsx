import React, { useState, Suspense } from "react";
import {
  // PerspectiveCamera,
  Environment,
  // OrbitControls,
  Stars,
  // useFaceControls,
  // useHelper,
  // Grid,
  // Center,
  // AccumulativeShadows,
  // RandomizedLight,
  // useGLTF,
  // CameraControls,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";

import { Experience } from "./Experience";
import "animate.css";
import NavigationButton from "./NavigationButton";
import BulletButton from "./BulletButton";
import { Loader } from "./Loader";
import DrawerModal from "./Drawer";


function App() {
  // const cameraControlsRef = React.useRef(null);
  const [aboutClick, setAboutClick] = React.useState(false);
  const [projectsClick, setProjectsClick] = React.useState(false);
  const [contactClick, setContactClick] = React.useState(false);
  const [backToBeginningClick, setBackToBeginningClick] = React.useState(false);

  const [showButton, setShowButton] = React.useState(true);
  const [showAboutButton, setShowAboutButton] = React.useState(false);
  const [showProjectsButton, setShowProjectsButton] = React.useState(false);
  const [showContactButton, setShowContactButton] = React.useState(false);

  const [state, setState] = React.useState({ right: false });

  const [openAboutDrawer, setOpenAboutDrawer] = React.useState(false);
  const [openProjectsDrawer, setOpenProjectsDrawer] = React.useState(false);
  const [openContactDrawer, setOpenContactDrawer] = React.useState(false);

  const [start, setStart] = useState(false);
  const { progress } = useProgress();


  return (
    <>
      {start && (
        <>
          <div className="hamburger-menu">
            <input id="toggle" type="checkbox"></input>
            <label for="toggle" className="hamburger">
              <div className="top-bun"></div>
              <div className="meat"></div>
              <div className="bottom-bun"></div>
            </label>

            <ul className="menu__box">
              <li>
                <button
                  style={{
                    marginTop: "30px",
                  }}
                  className="menu__item"
                  onClick={() => {
                    setOpenAboutDrawer(true);

                    // setProjectsClick(false);
                    // setContactClick(false);
                    // setTimeout(() => {
                    // setAboutClick(true);
                    // }, "1000");
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="menu__item"
                  onClick={() => {
                    setOpenProjectsDrawer(true);

                    // setAboutClick(false);
                    // setContactClick(false);
                    // setTimeout(() => {
                    // setProjectsClick(true);
                    // }, "1000");
                  }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className="menu__item"
                  onClick={() => {
                    setOpenContactDrawer(true);

                    // setAboutClick(false);
                    // setProjectsClick(false);
                    // setTimeout(() => {
                    // setContactClick(true);
                    //   }, "1000");
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {showButton && !aboutClick && (
            <NavigationButton setClick={setAboutClick} />
          )}
          {showAboutButton && aboutClick && (
            <NavigationButton setClick={setProjectsClick} isInAboutPosition />
          )}
          {showProjectsButton && projectsClick && (
            <NavigationButton setClick={setContactClick} isInProjectsPosition />
          )}
          {showContactButton && contactClick && (
            <NavigationButton
              setClick={setBackToBeginningClick}
              isInContactPosition
            />
          )}
          {showAboutButton && aboutClick && (
            <BulletButton
              img="assets/images/avatar.png"
              header="About Me"
              isLocatedInAbout
              state={state}
              setState={setState}
            />
          )}
          {showProjectsButton && projectsClick && (
            <BulletButton
              img="assets/images/laptop.png"
              header="Projects"
              isLocatedInProjects
              state={state}
              setState={setState}
            />
          )}
          {showContactButton && contactClick && (
            <BulletButton
              img="assets/images/smoke.png"
              header="Contact Me"
              isLocatedInContact
              state={state}
              setState={setState}
            />
          )}
          {openAboutDrawer && (
            <DrawerModal
              state={{ right: true }}
              setState={setState}
              isLocatedInAbout
              setOpenAboutDrawer={setOpenAboutDrawer}
              openAboutDrawer={openAboutDrawer}
            />
          )}
          {openProjectsDrawer && (
            <DrawerModal
              state={{ right: true }}
              setState={setState}
              isLocatedInProjects
              openProjectsDrawer={openProjectsDrawer}
              setOpenProjectsDrawer={setOpenProjectsDrawer}
            />
          )}
          {openContactDrawer && (
            <DrawerModal
              state={{ right: true }}
              setState={setState}
              isLocatedInContact
              openContactDrawer={openContactDrawer}
              setOpenContactDrawer={setOpenContactDrawer}
            />
          )}
        </>
      )}

      <Canvas
        shadows
        camera={{ position: [0, 11, 38], fov: 60 }}
        className="canvas"
        gl={{
          physicallyCorrectLights: true,
          toneMappingExposure: 1.2,
        }}
      >
        <Suspense fallback={null}>
          {/* <CameraControls ref={cameraControlRef} /> */}

          {/* <CameraControls
          ref={cameraControlsRef}
          minDistance={minDistance}
          enabled={enabled}
          verticalDragToForward={verticalDragToForward}
          dollyToCursor={dollyToCursor}
          infinityDolly={infinityDolly}
        /> */}
          <Environment
            background files={"assets/textures/gradient.hdr"}
            intensity={1.5}
          />

          <Stars />

          {/* <OrbitControls
          target={[2, 2, 1]}
          // enablePan={false}
          // enableZoom={false}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI / 3}
        /> */}

          <Experience
            aboutClick={aboutClick}
            setShowButton={setShowButton}
            setShowAboutButton={setShowAboutButton}
            projectsClick={projectsClick}
            setShowProjectsButton={setShowProjectsButton}
            contactClick={contactClick}
            setShowContactButton={setShowContactButton}
            backToBeginningClick={backToBeginningClick}
            setContactClick={setContactClick}
            setProjectsClick={setProjectsClick}
            setAboutClick={setAboutClick}
            setBackToBeginningClick={setBackToBeginningClick}
          />
        </Suspense>
      </Canvas>

      <Loader
        started={start}
        progress={progress}
        onStarted={() => setStart(true)}
      />
    </>
  );
}

export default App;
