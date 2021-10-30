import React from "react";
import styled from "styled-components";
// import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles";

const BackgroundAnimation = () => {
  React.useEffect(() => {
    loadParticles();
  }, []);

  function loadParticles() {
    tsParticles.load("particles", {
      fpsLimit: 60,
      particles: {
        links: {
          enable: true,
          distance: 50,
        },
        shape: {
          polygon: {
            nb_sides: 4,
          },
          type: "polygon",
        },
        stroke: 10,
        move: {
          enable: true,
          speed: 1,
          outModes: {
            default: "destroy",
          },
        },
        size: {
          value: 1,
        },
      },
    });
  }
  return (
    <CanvasContainer>
      <Canvas id="particles" />
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  position: relative;
`;

const Canvas = styled.canvas`
  position: absolute !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default BackgroundAnimation;
