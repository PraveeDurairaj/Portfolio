import React from 'react'
import { Container , Nav,Navbar} from 'react-bootstrap'
import './Nav.css'

const Navigation = () => {
  return (
  <>
    <Navbar expand="lg" className="bg-body-tertiary pb-0 position-fixed w-100" id='Nav'  >
      <Container className='bg-dark text-light mb-0 position-relative' fluid  >
        <Navbar.Brand href="#home" style={{'color':'yellow'}} className='fw-600 fs-3 ps-3'>Praveen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#Home" style={{'color':'white'}} className='px-4 mx-4 pt-2'>Home</Nav.Link>
            <Nav.Link href="#About" style={{'color':'white'}} className='px-4 mx-4 pt-2'>About</Nav.Link>
            <Nav.Link href="#skill-header" style={{'color':'white'}} className='px-4 mx-4 pt-2'>Skills</Nav.Link>
            <Nav.Link href="#Projects" style={{'color':'white'}} className='px-4 mx-4 pt-2'>Project</Nav.Link>
            <Nav.Link href="#contact" style={{'color':'white'}} className='px-4 mx-4 pt-2'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  </>
  )
}

export default Navigation
