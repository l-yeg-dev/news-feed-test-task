import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Preferences from "../Preferences/Preferences";



const NavBar = () => {
  return(
		<Navbar sticky="top"  bg="dark" variant="dark">
			<Container>
				<Preferences />
				<Button className="mx-3">
					Logout
				</Button>
			</Container>
		</Navbar>
	)
}

export default NavBar;
