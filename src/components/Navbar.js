import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{height:"70px"}}>
        <Container>
            <img style={{height:"80px", paddingRight:"10px"}} src="https://cdn-icons-png.freepik.com/512/5075/5075090.png"/>
          <Navbar.Brand style={{fontFamily:"Courier New, monospace",fontSize:"40px",paddingRight:"700px"}}>Cineverse</Navbar.Brand>
          <Nav className="me-auto" style={{fontSize:"20px",gap:"15px"}}>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to='/reviews'>Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default NavBar;