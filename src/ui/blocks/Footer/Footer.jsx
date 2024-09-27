import React from "react";
import {
  AppleIcon,
  GoogleIcon,
  SocFacebookIcon,
  SocInstIcon,
  SocTwitterIcon,
} from "../../icons";
import { Button } from "../../base/Button";
import {
  Buttons,
  Col,
  FooterWrapper,
  Links,
  Row,
  Social,
  SocialItem,
  Text,
  ColText,
  ColBtn,
} from "./FooterStyled";
import { Container } from "../../base/Container";
import { routesPath } from "../../../conts/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container wide>
        <Row>
          <Col>
            <Social>
              <SocialItem
                target="_blank"
                href="https://www.instagram.com/Chitkarau/"
              >
                <SocInstIcon />
              </SocialItem>
              <SocialItem
                target="_blank"
                href="https://www.facebook.com/Chitkarau/"
              >
                <SocFacebookIcon />
              </SocialItem>
              <SocialItem target="_blank" href="https://twitter.com/Chitkarau">
                <SocTwitterIcon />
              </SocialItem>
            </Social>
            <Links>
              <Link to={routesPath.privacy}>Privacy</Link>
              <Link to={routesPath.terms}>Terms</Link>
            </Links>
          </Col>
          <ColText>
            <Text>Copyright © 2024 Ucampus. All rights reserved</Text>
          </ColText>
          <ColBtn>
            <Buttons>
              <a
                href="https://apps.apple.com/us/app/ucampus/id1561025004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button icon={<AppleIcon />} bg="blue">
                  Apple Store
                </Button>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.app.uengage.ufood&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button icon={<GoogleIcon />} bg="blue">
                  Google Play
                </Button>
              </a>
            </Buttons>
          </ColBtn>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
