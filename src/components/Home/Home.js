import React, { useEffect, useState } from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from "../../utilities/images/logo2.png"
import "./Home.css"

const Home = () => {
    const [items, setItems] = useState([]);
    const [breakFast, setBreakFast] = useState([]);
    useEffect(() => {
            fetch('./fake.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []) 
    const handleBreakFast= (itemType) => {
           const breakfast= items.filter(item => item.type === itemType);
           setBreakFast(breakfast);
           console.log(breakfast);
    }
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
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
                        <Nav.Link as={Link} to="#home"><i className="fas fa-shopping-cart text-dark"></i></Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link className="btn-red bg-danger" as={Link} to="#pricing">Sign Up</Nav.Link>
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
                    <Link onClick={()=>handleBreakFast("breakfast")}  to="#breakfast-container"><li>BreakFast</li></Link>
                    <Link onClick={()=>handleBreakFast("lunch")} to="#lunch"><li>Lunch</li></Link>
                    <Link onClick={()=>handleBreakFast("dinner")} to="#dinner"><li>Dinner</li></Link>                               
                </ul>

                <div id="breakfast-container">
                    {
                        breakFast.map((test, index)=><p key={index}>{test.name}</p>)
                    }
                </div>
            </section>
        </>
    );
};

export default Home;