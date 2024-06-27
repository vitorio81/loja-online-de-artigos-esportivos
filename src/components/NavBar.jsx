import React from 'react';
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Nav
            justified
            pills
        >
            <NavItem>
            <Link to="/" className="nav-link">VTM Sports</Link>
            </NavItem>
            <NavItem>
                <input type="search" name="search-item" id="search-item" />
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <strong>Entre ou cadastre-se</strong><br />Meus pedidos
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Entre ou cadastre-se</DropdownItem>
                    <DropdownItem>Meus pedidos</DropdownItem>
                <   DropdownItem divider />
                    <DropdownItem>Sair</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Link to="/favorites" className="nav-link">Favoritos</Link>
            </NavItem>
            <NavItem>
            <Link to="/cart" className="nav-link">Carrinho</Link>
            </NavItem>
        </Nav>
    )
}