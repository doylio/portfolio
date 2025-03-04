import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/logo.svg" height={40} width={40} />{" "}
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
            Doylio
          </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#posts">
          <NavLink>Posts</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
