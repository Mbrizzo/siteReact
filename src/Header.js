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
        <a id="logo" className="brand-logo" href="/">
          Projeto React
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
      <NavItem id="navItem" href="sobre">
        Sobre
      </NavItem>
      <NavItem id="navItem" href="https://github.com/Mbrizzo/siteReact">
        Git
      </NavItem>
      <NavItem id="navItem" href="contato">
        Contato
      </NavItem>
      <NavItem id="navItem" href="testes" style={{ color: 'tomato' }}>
        Testes
      </NavItem>
      <NavItem id="navItem" href="ferramentas">
        Ferramentas
      </NavItem>
    </Navbar>
  );
};

export default Nav;
