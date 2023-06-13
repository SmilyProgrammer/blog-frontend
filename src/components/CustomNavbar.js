import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <strong>HIT Blog Site</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Blog Details</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All</NavDropdown.Item>
              <NavDropdown.Item href="#action4">MERN Stack</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Cyber Security
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Discover Your Life
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Life Hacks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
