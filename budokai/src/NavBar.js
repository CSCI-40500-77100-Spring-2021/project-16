import{Navbar, Nav} from 'react-bootstrap'
import './css/NavBar.css'
function NavBar()
{
    return (
    <Navbar className ="pads" bg="light" expand="lg">
        <Navbar.Brand className ="Brand" href="/">Budokai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/forum">Add Event</Nav.Link>
            </Nav>
            <Navbar.Text className = "nav_text">
                eSports Tournaments and Events Platform
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    );
}
export default NavBar;