import React from "react";
import styled from "styled-components";
import { tsParticles } from "tsparticles";
import { Cube } from "./Shapes";

const BackgroundAnimation = () => {
  return null;
  React.useEffect(() => {
    tsParticles.load("particles", {
      fps_limit: 28,
      particles: {
        collisions: {
          enable: false,
        },
        number: {
          value: 50,
          density: {
            enable: true,
          },
        },
        line_linked: {
          enable: true,
          distance: 30,
          opacity: 0.4,
        },
        move: {
          speed: 1,
        },
        opacity: {
          anim: {
            enable: true,
            opacity_min: 0.05,
            speed: 1,
            sync: false,
          },
          value: 0.4,
        },
      },
      polygon: {
        enable: true,
        scale: 0.1,
        type: "inline",
        move: {
          radius: 10,
        },
        url: "/images/ethereum.svg",
        inline: {
          arrangement: "equidistant",
        },
        draw: {
          enable: true,
          stroke: {
            color: "rgba(255, 255, 255, .2)",
          },
        },
      },
      retina_detect: false,
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            size: 6,
            distance: 40,
          },
        },
      },
    });
  }, []);
  // const canvasRef = React.useRef<HTMLCanvasElement>(null);

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
