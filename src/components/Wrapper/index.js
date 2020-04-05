import React from 'react'
import Row from '../Row'
import Col from '../Col'
import Jumbotron from '../Jumbotron'
import Container from '../Container'

const Wrapper = ({ children }) => {
  return (
    <Container>
      <Jumbotron />
      <Row>
        <Col>
          <Container>{children}</Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Wrapper
