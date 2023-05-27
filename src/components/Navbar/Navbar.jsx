import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Preferences from "../Preferences/Preferences";
import {useCallback, useEffect, useState} from "react";
import RegistrationModal from "../modals/RegistrationModal";
import LoginModal from "../modals/LoginModal";



const NavBar = () => {
	const token = localStorage.getItem('authToken');

	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRegistrationModal, setShowRegistrationModal] = useState(false);
	const [hasToken, setHasToken] = useState(token !== null);

	const handleLoginShow = () => setShowLoginModal(true);
	const handleShowRegisterModal = () => { setShowRegistrationModal(true); }
	const handleLogout = useCallback(() => {
		localStorage.removeItem('authToken');
		setHasToken(false)
	},[])

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		setHasToken(token !== null);
	},[token, handleLogout])

	return(
		<Navbar sticky="top"  bg="dark" variant="dark">
			<Container>
				<Nav className="me-auto">
					<Nav.Link href="/#">Home</Nav.Link>
				</Nav>
				{
					hasToken ?
					<>
						<Preferences />
						<Button className="mx-3" onClick={handleLogout}>
							Logout
						</Button>
					</>
					:
						<>
						<Button
							className="mx-3"
							onClick={handleLoginShow}
						>
							Login
						</Button>
						<Button
							className="mx-3"
							onClick={handleShowRegisterModal}
						>
							Registration
						</Button>
					</>
				}
				<LoginModal showModal={showLoginModal} toggleModal={setShowLoginModal} />
				<RegistrationModal showModal={showRegistrationModal} toggleModal={setShowRegistrationModal} />
			</Container>
		</Navbar>
	)
}

export default NavBar;
