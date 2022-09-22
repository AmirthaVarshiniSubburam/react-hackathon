import React from 'react'
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar bg="light" sticky='top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.Zm_wWlK5a5-284unhYzU8wHaHa?pid=ImgDet&rs=1"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Natwest Group
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.natwest.com/business/trade-finance/managing-risk/foreign-exchange.html">Forex</Nav.Link>
            <Nav.Link href="#pricing">Insurance policies</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hospital and Pharmacy </NavDropdown.Item>              
              <NavDropdown.Item href="#action/3.3">Hungry Craving</NavDropdown.Item>              
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* //Body of home */}

      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Foreign exchange</h3>
          <p>Trade in international currencies and reduce your business exposure to Foreign Exchange (FX) risks..
          We’ve a team of specialists in NatWest Markets that help businesses access a full range of FX services. From straight forward currency conversations to complete risk management, we tailor solutions to suit commercial customers' simple or complex needs.
Our FX hedging services and tools can help you to convert currencies at competitive rates and manage the currency risks inherent within your business, depending on your objectives.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Business Insurance</h3>
          <p>NatWest is acting as an introducer to Arthur J. Gallagher Insurance Brokers Limited. If you buy an insurance policy or renew a policy with Arthur J. Gallagher Insurance Brokers Limited, the bank will receive commission based on a percentage of the commission or fee Gallagher receives..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Professional and Business Services</h3>
          <p>
          Your attitude, knowledge and skills are all important pieces of your financial survival kit, and your business success.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>            
  )
}

export default Home