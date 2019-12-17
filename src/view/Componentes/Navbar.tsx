import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../style.css';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { useAuthActions } from 'src/actions/useAuthActions';

export function Navb() {
  const [user] = useAuthStore();
  const { logout } = useAuthActions();

  const logado = !!user;

  return (
    <Navbar className="Navstyle" collapseOnSelect expand="lg" bg="transparent" variant="dark">
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
        {logado ? (
          <Nav>
            <Nav.Link href="/#/editar">Editar República</Nav.Link>
            <Nav.Link onClick={logout}>Sair</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/#/cadastrar">Cadastrar República</Nav.Link>
            <Nav.Link href="/#/login">Entrar</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
