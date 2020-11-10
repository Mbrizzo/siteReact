import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

const Nav = () => {
  return (
    <Navbar
      className="black"
      alignLinks="right"
      fixed="true"
      brand={
        <a className="brand-logo" href="/">
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
      <NavItem href="sobre">Sobre</NavItem>
      <NavItem href="https://github.com/Mbrizzo/siteReact">Git</NavItem>
      <NavItem href="contato">Contato</NavItem>
    </Navbar>
  );
};

export default Nav;
