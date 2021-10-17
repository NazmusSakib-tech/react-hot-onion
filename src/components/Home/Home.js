import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import navLogo from "../../utilities/images/logo2.png"
import "./Home.css"

const Home = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            src={navLogo}
                            width="100"
                            height="35"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home"><i className="fas fa-shopping-cart text-dark"></i></Nav.Link>
                        <Nav.Link className="text-dark fw-bold" href="/login">Login</Nav.Link>
                        <Nav.Link className="btn-red bg-danger" href="#pricing">Sign Up</Nav.Link>
                        <Navbar.Text className="ms-2">
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* banner section  */}
            <section className="banner">
                <div>
                    <h1>Best Food Waiting For Belly</h1>
                    <InputGroup className="mb-3 w-75 m-auto">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className="rounded-pill"
                        />
                        <Button className="btn btn-danger rounded-pill ms--1" variant="outline-warning" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
            </section>

            <section className="allItems">
                <ul>
                    <li>BreakFast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </section>
        </>
    );
};

export default Home;