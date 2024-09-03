import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: '20px 10px' }}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontWeight: 'bold', fontSize: '1.8rem' }}
        >
          Handicine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="light" className="me-2">로그인</Button>
            <Button variant="light">회원가입</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;