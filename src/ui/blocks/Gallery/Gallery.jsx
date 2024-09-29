import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import {
  Col,
  Content,
  GalleryWrapper,
  ImageStyled,
  ImageWrapper,
  Row,
  Text,
  Title,
} from "./GalleryStyled";
import { Container } from "../../base/Container";

import SonePic from "../../../static/pictures/square-one.jpg";
import circlePic from "../../../static/pictures/circle_one.jpg";
import stwoPic from "../../../static/pictures/square-two.jpg";
import happinessPic from "../../../static/pictures/happiness_van.jpg";
import chitkaraPic from "../../../static/pictures/College.jpg";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme/default";

const Gallery = () => {
  const firstRowRef = useRef();
  const secondRowRef = useRef();
  const thirdRowRef = useRef();
  const SonePicRef = useRef();
  const happinessPicRef = useRef();
  const circlePicRef = useRef();
  const stwoPicRef = useRef();
  const chitkaraPicRef = useRef();

  const isTablet = useMediaQuery({ query: "(max-width: 1400px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const images = [];
    const rows = [];
    images.push(SonePicRef.current);
    images.push(happinessPicRef.current);
    images.push(circlePicRef.current);
    images.push(stwoPicRef.current);
    images.push(chitkaraPicRef.current);
    rows.push(firstRowRef.current);
    rows.push(secondRowRef.current);
    rows.push(thirdRowRef.current);
    images.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "50% 60%",
          end: "bottom top",
          toggleClass: "light",
          toggleActions: "play none play none",
        },
      });
    });
    rows.forEach((row) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: "20% 90%",
          toggleClass: "active",
          toggleActions: "play none play none",
        },
      });
    });
  }, []);

  return (
    <GalleryWrapper>
      <Container>
        <Row ref={firstRowRef}>
          <Col mr={isTablet ? "7.8vw" : "130px"}>
            {isMobile && (
              <Content title={1}>
                <Title>
                  Explore our Outlets <br />& Discover New Flavors
                </Title>
                <Text>
                  Check out our variety of outlets available for your convenience
                </Text>
              </Content>
            )}
            <ImageWrapper ref={SonePicRef} Sone>
              <ImageStyled high={1} src={SonePic} alt="Sone" />
            </ImageWrapper>
            {!isMobile && (
              <Content second>
                <Title>Square One</Title>
                <Text width={340}>
                  Square One hosts a range of exciting outlets like Keventers, La Pino'z, Domino's, Chai Nagri, and many more. Whether you're in the mood for refreshing beverages, cheesy pizzas, or delicious snacks, there's something for everyone!
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <>
                <Content title={2}>
                  <Title>
                    Explore our Outlets <br />& Discover New Flavors
                  </Title>
                  <Text>
                    Check out our variety of outlets available for your convenience
                  </Text>
                </Content>
                <ImageWrapper ref={happinessPicRef} happiness>
                  <ImageStyled
                    high={!isMobile ? 1 : 0}
                    wide={isMobile ? 1 : 0}
                    src={happinessPic}
                    alt="happiness"
                  />
                </ImageWrapper>
              </>
            )}
          </Col>
        </Row>
        <Row ref={secondRowRef}>
          <Col mr={isTablet ? "5.8vw" : "130px"}>
            {isMobile && (
              <Content second>
                <Title>Square One</Title>
                <Text width={340}>
                  Square One hosts a range of exciting outlets like Keventers, La Pino'z, Domino's, Chai Nagri, and many more. Whether you're in the mood for refreshing beverages, cheesy pizzas, or delicious snacks, there's something for everyone!
                </Text>
              </Content>
            )}
            {isMobile
              ? <ImageWrapper
                ref={stwoPicRef}  // Mobile: show stwoPic
                style={{ marginLeft: 0 }}  // Optional mobile-specific styling
                stwo
              >
                <ImageStyled wide={1} src={stwoPic} alt="stwo" />
              </ImageWrapper>
              : <>
                <ImageWrapper
                  ref={stwoPicRef}  // Desktop: show stwoPic
                  style={{ marginLeft: 60 }}  // Optional desktop-specific styling
                  stwo
                >
                  <ImageStyled wide={1} src={stwoPic} alt="stwo" />
                </ImageWrapper>
              </>
            }
            {!isMobile ? (
              <Content four>
                <Title>Circle One</Title>
                <Text width={365}>
                  Circle One is home to Barista, offering a cozy spot for coffee lovers. Whether it's a quick caffeine fix or a relaxed coffee break, enjoy your favorite brew at Circle One.
                </Text>
              </Content>
            ) : (
              <Content third>
                <Title>Square Two</Title>
                <Text big>
                  Square Two offers delightful options such as China Box, The Cakerie, and many more. Whether you're craving Asian cuisine or sweet treats, Square Two has something to satisfy your taste buds.
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <Content second>
                <Title>Square Two</Title>
                <Text
                  style={isMobile ? { fontSize: theme.fonts["regular"] } : {}}
                >
                  Square Two offers delightful options such as China Box, The Cakerie, and many more. Whether you're craving Asian cuisine or sweet treats, Square Two has something to satisfy your taste buds.
                </Text>
              </Content>
            )}
            <ImageWrapper ref={circlePicRef}
              circle>
              <ImageStyled high={1} src={circlePic} alt="circle" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row ref={thirdRowRef}>
          {isMobile && (
            <Content four>
              <Title>Circle One</Title>
              <Text width={365}>
                Circle One is home to Barista, offering a cozy spot for coffee lovers. Whether it's a quick caffeine fix or a relaxed coffee break, enjoy your favorite brew at Circle One.
              </Text>
            </Content>
          )}
          <ImageWrapper
            ref={chitkaraPicRef}
            style={{ marginTop: isMobile ? 0 : isTablet ? 55 : 85 }}
            chitkara
          >
            <ImageStyled
              high={isMobile ? 1 : 0}
              wide={!isMobile ? 1 : 0}
              src={chitkaraPic}
              alt="chitkara"
            />
          </ImageWrapper>
        </Row>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
