import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import MCU from "./mcu.json";
import Image from "./Image/index";

class GameContainer extends Component {
  state: {
    score: 0
  };

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Jumbotron />
          <Row>
            <Col>
              <Image friends={MCU} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default GameContainer;
