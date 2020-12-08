import { Navbar, NavItem, Icon } from "react-materialize";
import "./Nav.css"

const Nav = () => {
  return (
    <Navbar
      className="blue-grey darken-3"
      alignLinks="right"
      brand={
        <a className="brand-logo" href="/">
          Portfolio
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="#contact">Contact</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#projects">Projects</NavItem>
    </Navbar>
  );
};

export default Nav;
