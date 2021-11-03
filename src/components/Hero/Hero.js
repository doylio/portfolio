import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding bringToFront>
      <LeftSection>
        <SectionTitle main center>
          Building the future of the web
        </SectionTitle>
        <SectionText>
          My name is Shawn Doyle, aka Doylio. I am a web3 developer committed to
          using crypto technologies to build a better internet.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
