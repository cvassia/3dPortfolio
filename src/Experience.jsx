// import sky from "./images/digital_painting_beach_with_tent_campfire_and_two.jpg";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

import { suspend } from "suspend-react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  Mesh,
  PointLight,
  PointLightHelper,
  RectAreaLight,
  SpotLight,
  SpotLightHelper,
} from "three";
import {
  Environment,
  OrbitControls,
  Stars,
  useFaceControls,
  useHelper,
  Center,
} from "@react-three/drei";
import { Helmet } from "react-helmet";


export const Experience = ({
  aboutClick,
  setShowButton,
  setShowAboutButton,
  projectsClick,
  setShowProjectsButton,
  contactClick,
  setShowContactButton,
  backToBeginningClick,
  setContactClick,
  setProjectsClick,
  setAboutClick,
  setBackToBeginningClick,
}) => {
  useEffect(() => {
    aboutClick && setBackToBeginningClick(false);

    aboutClick && setShowButton(false);
    projectsClick && setShowAboutButton(false);
    contactClick && setShowProjectsButton(false);
    backToBeginningClick && setShowContactButton(false);
  }, [
    aboutClick,
    setShowButton,
    setShowAboutButton,
    contactClick,
    setShowProjectsButton,
    backToBeginningClick,
    setShowContactButton,
    projectsClick,
    setBackToBeginningClick,
  ]);

  const lookAtTo = new THREE.Vector3(0, 0, 0);

  useFrame((state) => {
    if (aboutClick) {
      state.camera.position.lerp(lookAtTo.set(13.5, 8, 8), 0.03);

      state.camera.updateProjectionMatrix();
      setTimeout(() => {
        setShowAboutButton(true);
      }, 3000);
    }
    if (projectsClick) {
      state.camera.position.lerp(lookAtTo.set(-24, 9, 30), 0.03);

      state.camera.updateProjectionMatrix();
      setAboutClick(false);

      setTimeout(() => {
        setShowProjectsButton(true);
      }, 3000);
    }
    if (contactClick) {
      state.camera.position.lerp(lookAtTo.set(-8, 9, 0), 0.03);

      state.camera.updateProjectionMatrix();
      setProjectsClick(false);

      setTimeout(() => {
        setShowContactButton(true);
      }, 2000);
    }
    if (backToBeginningClick) {
      state.camera.position.lerp(lookAtTo.set(10, 8, 30), 0.03);

      state.camera.updateProjectionMatrix();

      setContactClick(false);

      setTimeout(() => {
        setShowButton(true);
      }, 2000);
    }
    return null;
  });

  const Model = () => {
    const group = useRef();

    const { scene, animations } = useGLTF("/models/ter.glb");

    let mixer = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
    useFrame((_, delta) => {
      mixer.update(delta);
    });
    return <primitive ref={group} object={scene} dispose={null} scale={0.5} />;
  };

  // const pointLightRef = React.useRef(null);
  // useHelper(pointLightRef, PointLightHelper, 20);

  // const { intensity, x, z, y } = useControls({
  //   intensity: { value: 1, min: 0, max: 10 },
  //   x: { value: 0, min: -1200, max: 1200 },

  // });

  const spotLightRef = React.useRef(null);
  useHelper(spotLightRef, SpotLightHelper, "yellow");

  // const { intensit, distance, angle, x1, y1, z1 } = useControls({
  //   intensit: { value: 1, min: 0, max: 10 },
  //   distance: { value: 5, min: -1200, max: 1200 },
  //   angle: { value: Math.PI / 6, min: -1200, max: 1200 },
  //   x1: { value: 0, min: -1200, max: 1200 },
  //   y1: { value: 0, min: -1200, max: 1200 },
  //   z1: { value: 0, min: -1200, max: 1200 },
  // });
  return (
    <>
      <Model />
      <Helmet>
        {aboutClick ? (
          <title>Portfolio - About Me</title>
        ) : projectsClick ? (
          <title>Portfolio - My Projects</title>
        ) : contactClick ? (
          <title>Portfolio - Contact Me</title>
        ) : (
          backToBeginningClick && <title>Portfolio - Welcome</title>
        )}
      </Helmet>

      {/* <pointLight
        ref={pointLightRef}
        position={[x, z, y]}
        intensity={intensity}
        // args={["#001fb4", 1, "60px", "60px"]}
        // rotation-x={-Math.PI / 2}
      /> */}
      {/* <spotLight
        ref={spotLightRef}
        distance={distance}
        intensity={intensit}
        angle={angle}
        position={[x1, z1, y1]}
      /> */}
      {/* <hemisphereLight args={["white", "white", "0.3"]} />
      <ambientLight color="white" intensity={0.3} /> */}

      {/* //////////////night */}
      <ambientLight color="white" intensity={0.1} />
      <spotLight
        castShadow
        distance={1005}
        intensity={0.3}
        angle={1}
        position={[-460, 220, -860]}
      />
      <spotLight
        color={"#a6bfd2"}
        castShadow
        intensity={0.1}
        position={[0, 420, -640]}
      />
      <directionalLight
        castShadow
        intensity={0.3}
        position={[1040, 140, 840]}
      />
      <pointLight castShadow intensity={1} position={[-100, -120, -640]} />
    </>
  );
};
