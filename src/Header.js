import React from 'react';
import './Header.css';
import { Navbar, Icon, NavItem } from 'react-materialize';

const Nav = () => {
  return (
    <Navbar
      className="dark"
      style={{ background: '#212121' }}
      alignLinks="right"
      fixed="true"
      brand={
        <a id="logo" href="/">
          PROJETO REACT
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem id="navItem" href="teste" style={{ color: '#d71c27' }}>
        Teste
      </NavItem>
      <NavItem id="navItem" href="sobre" style={{ color: '#6d6d6d' }}>
        Sobre
      </NavItem>
      <NavItem
        id="navItem"
        href="https://github.com/Mbrizzo/siteReact"
        target="_blank"
        style={{ color: '#6d6d6d' }}
      >
        GitHub
      </NavItem>
      <NavItem id="navItem" href="contato" style={{ color: '#6d6d6d' }}>
        Contato
      </NavItem>
      <NavItem id="navItem" href="ferramentas" style={{ color: '#34b3f3' }}>
        Ferramentas
      </NavItem>
      <NavItem id="navItem" href="signup" style={{ color: '#66bb6a' }}>
        SignUp
      </NavItem>
    </Navbar>
  );
};

export default Nav;
