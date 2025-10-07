import React from "react"
import NavbarBrand from "./navbar-brand"
import "./header.scss"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

function Header() {
  return (
    <Navbar
      className="justify-content-between fixed-top rcb-nav rcb-opaque rcb-bg-light"
      expand="lg"
    >
      <NavbarBrand />
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/naechster-termin">Nächster Termin</Nav.Link>
            <Nav.Link href="/termine">Termine</Nav.Link>
            <Nav.Link href="/#clubleben">Clubleben</Nav.Link>
            <Nav.Link href="/#blog">Blog</Nav.Link>
            <Nav.Link href="/mitglied-werden">Du möchtest Mitglied werden?</Nav.Link>
            <Nav.Link href="/#kontakt">Kontakt</Nav.Link>
            <NavDropdown title="Intern">
              <Nav.Link href="/intern">Mitglieder</Nav.Link>
              <Nav.Link href="/toastmaster-des-abends">TdA</Nav.Link>
              <Nav.Link href="/vp-mitgliedschaft">VP-Mitgl.</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header
