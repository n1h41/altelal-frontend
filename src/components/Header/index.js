import {React, useState} from 'react'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import './index.css'

function Header() {
    const [cartExpand, setCartExpand] = useState(false)
    return (
        <>
            <Container className="top-bar py-3">
                <Row className="d-flex align-items-center">
                    <Col>
                        Welcome to Altelal Online Shopping Store !
                    </Col>
                    <Col className="d-flex justify-content-between align-items-center">
                        <select name="language" id="language" className="lang-selector">
                            <option value="en|en">English</option>
                            <option value="en|ar">Arabic</option>
                        </select>
                        <div className="v-d"></div>
                        <select name="currency" id="currency" className="currency-selector">
                            <option value="USD">United States (US) Dollar ($)</option>
                            <option value="DHR">United Arab Emirates Dhirham</option>
                        </select>
                        <div className="v-d"></div>
                        <Nav.Link href="#Home" className="p-0">Track Your Order</Nav.Link>
                    </Col>
                </Row>
            </Container>
            <hr className="h-d" />
            <Container>
                <Navbar className="p-0 w-100 justify-content-between align-items-center">
                    <div className="logo-container">
                        <Navbar.Brand className="logo">
                            <img src={Logo} alt="logo" className="logo" />
                        </Navbar.Brand>
                    </div>
                    <ul className="extras-menu-container d-flex justify-content-around m-0">
                        <li className="counter-container">
                            <a href="#home">
                                <span class="material-icons">
                                    favorite_border
                                </span>
                            </a>
                            <span className="item-counter text-center">0</span>
                        </li>
                        <div className="v-d"></div>
                        <li className="counter-container">
                            <a href="#home" onMouseOver={ () => setCartExpand(true)} onMouseLeave={ () => setCartExpand(false)}>
                                <span class="material-icons-outlined">
                                    shopping_cart
                                </span>
                            </a>
                            <span className="item-counter text-center">0</span>
                            <div className={`d-flex justify-content-start p-2 ${cartExpand ? 'cart-preview' : 'cart-preview d-none'}`}>
                                <p>
                                    No products in cart.
                                </p>
                            </div>
                        </li>
                        <div className="v-d"></div>
                        <li>
                            <a href="#home">
                                <span class="material-icons-outlined">
                                    person
                                </span>
                            </a>
                        </li>
                    </ul>
                </Navbar>
            </Container>
            <hr className="h-d" />
        </>
    )
}

export default Header