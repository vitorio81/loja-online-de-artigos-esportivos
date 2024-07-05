import React from 'react';
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Nav
            justified
            pills
            className="navbar"
        >
            <NavItem>
            <Link to="/" className="nav-link nav-link-custom">VTM Sports</Link>
            </NavItem>
            <NavItem>
                <input type="search" name="search-item" id="search-item" className="search-input-custom" placeholder="O que você procura?"/>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="dropdown-toggle-custom">
                    <strong>Entre ou cadastre-se</strong><br />Meus pedidos
                </DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem>Entre ou cadastre-se</DropdownItem>
                    <DropdownItem>Meus pedidos</DropdownItem>
                    <DropdownItem><Link to="/admin">pag.Admin</Link></DropdownItem>
                <   DropdownItem divider />
                    <DropdownItem>Sair</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Link to="/favorites" className="nav-link nav-link-custom">Favoritos</Link>
            </NavItem>
            <NavItem>
            <Link to="/cart" className="nav-link nav-link-custom">Carrinho</Link>
            </NavItem>
        </Nav>
    )
}