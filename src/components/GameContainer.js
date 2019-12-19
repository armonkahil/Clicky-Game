import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row/Row";
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
            <Container>
              <div className="d-flex flex-wrap justify-content-center">
              <Image friends={MCU} />
              </div>
            </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default GameContainer;
