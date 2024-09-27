import React from "react";
import { CheckIcon, GearIcon, StarIcon, UserIcon } from "../../icons";
import { Container } from "../../base/Container";
import { Col, Icon, InfoWrapper, Row, Text, Title } from "./InfoStyled";

const InfoMock = [
  {
    id: "check",
    icon: <CheckIcon />,
    title: "Food Ordering",
    text: "Order from your favorite campus outlets with ease. Fast, convenient, and reliable.",
  },
  {
    id: "user",
    icon: <UserIcon />,
    title: "Gym Membership",
    text: "Get access to exclusive gym memberships directly through the app and stay fit on campus.",
  },
  {
    id: "gear",
    icon: <GearIcon />,
    title: "Uniform Purchasing",
    text: "Order your official campus uniforms online, ensuring you’re always ready for class.",
  },
  {
    id: "star",
    icon: <StarIcon />,
    title: "Convenient and Quick",
    text: "Ucampus makes your campus life easier with fast processing and seamless transactions.",
  },
];

const Info = () => {
  return (
    <InfoWrapper>
      <Container>
        <Row>
          {InfoMock.map((item) => (
            <Col key={item.id} className="last">
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Col>
          ))}
        </Row>
      </Container>
    </InfoWrapper>
  );
};

export default Info;
