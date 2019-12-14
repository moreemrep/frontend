import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

export function Navb() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Navbar.Brand href="/#/">#moreemrep</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#/blog">Blog</Nav.Link>
          <NavDropdown title="Informações" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/#/informacoes#sobre">Sobre nós</NavDropdown.Item>
            <NavDropdown.Item href="/#/informacoes#motivacao">Motivação</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#/informacoes#colaborar">Como colaborar</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/#/cadastrar">Cadastrar República</Nav.Link>
          <Nav.Link href="/#/login">Entrar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
