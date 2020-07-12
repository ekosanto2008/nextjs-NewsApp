import Head from 'next/head';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => (
    <div style={{marginBottom : '5%'}}>
        <Head>
            <title>News App</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">News App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown className="text-white" title="News" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                    <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;