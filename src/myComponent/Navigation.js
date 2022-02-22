import React, { Component } from 'react'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact';


export default class Navigation extends Component {
  render() {
    return (

     <Router>

      <div>

<Navbar bg="dark" variant={"dark"} expand="lg">
  <Container fluid>
    <Navbar.Brand as = {Link} to={"/home"}>Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as = {Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as = {Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as = {Link} to={"/contact"}>Contact</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div>
<Switch>
<Route path="/home">
    <Home/>
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path="/contact">
     <Contact/>
    </Route>
  </Switch>

  </div>



  </Router>
       
      
    );
  }
}


