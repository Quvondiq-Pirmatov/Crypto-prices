import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import logo from './CoinWhite.webp'

const Logo = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md='12' className='text-center mt-5'>
            <img className='logo' src={logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Logo;
