import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; 2021 <Link href="https://doyl.io"> Shawn Doyle</Link> . All
            rights reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="mailto:me@shawnrobertdoyle.com">
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/doylio">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/shawnrobertdoyle/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/theDoylio">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
