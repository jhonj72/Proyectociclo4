import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../img/logo.png";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant="dark">{/*fixed="top" --> sirve para fijar el encabezado(menu)*/}
        <Container>
          <img className="logo" src={logo}/>
          {/*<img className="logo" src={logo}/>*/}
          <Navbar.Brand href="#home">1234567890!!!!!<span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <NavbarToggle sria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="Basic-Navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
    */}
          </Nav>

          <DropdownButton id="dropdown-basic-button" title="Usuario">
            <Dropdown.Header id="dropdown-Header">
              <Row>
              <FontAwesomeIcon icon={faUserCircle}/>
              </Row>
              <Row>
                USUARIO
              </Row>   
              <Dropdown.Divider />
            </Dropdown.Header>            
            <Dropdown.Item href="#/action-1"><center>Cerrar Sesión</center></Dropdown.Item>
            {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
