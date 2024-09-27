import React, { useEffect, useRef } from "react";
import { AppleIcon, GoogleIcon } from "../../icons";
import { Container } from "../../base/Container";
import { Button } from "../../base/Button";
import { ButtonRow, DownloadWrapper, Title } from "./DownloadStyled";
import { useLocation } from "react-router-dom";

const Download = () => {
  const sectionRef = useRef();
  const location = useLocation();

  useEffect(() => {
    location.hash === "#download" &&
      sectionRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
  }, [location]);

  return (
    <DownloadWrapper ref={sectionRef}>
      <Container>
        <Title>Download the App</Title>
        <ButtonRow>
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
        </ButtonRow>
      </Container>
    </DownloadWrapper>
  );
};

export default Download;
