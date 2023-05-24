import {Container, Nav, Navbar} from "react-bootstrap";
import Preferences from "../Preferences/Preferences";



const NavBar = () => {
  return(
		<Navbar fixed="top"  bg="dark" variant="dark">
			<Container>
				{/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
				</Nav>
				<Preferences />
			</Container>
		</Navbar>
	)
}

export default NavBar;
