import React from "react";
import { LogoIcon } from "../../icons";
import { Container } from "../../base/Container";
import {
  Anchor,
  HeaderContent,
  HeaderWrapper,
  Logo,
  Navigation,
} from "./HeaderStyled";
import { Link } from "react-router-dom";
import { routesPath } from "../../../conts/routes";
import { HashLink } from "react-router-hash-link";

const Header = ({ solid, color }) => {
  return (
    <HeaderWrapper solid={solid}>
      <Container>
        <HeaderContent>
          <Logo>
            <Link to={routesPath.main}>
              <LogoIcon color={color !== "white" ? "blue" : "white"} />
            </Link>
          </Logo>
          <Navigation>
            <Link to={routesPath.faq}>
              <Anchor color={color}>FAQ</Anchor>
            </Link>
            <a href="https://drive.usercontent.google.com/download?id=1gLAbyMp3BytG6nOq55HVHvzBAwgmUF3H&export=download&authuser=0" target="_blank" rel="noopener noreferrer">
                <Anchor color={color}>Download APK</Anchor>
            </a>
          </Navigation>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
