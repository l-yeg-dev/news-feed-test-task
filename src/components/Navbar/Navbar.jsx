import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import Preferences from "../Preferences/Preferences";
import {useState} from "react";



const NavBar = () => {
	const [showModal, setShowModal] = useState(false);
	const [password, setPassword] = useState(false);
	const [email, setEmail] = useState(false);
	const isUserAuthEd = localStorage.getItem('isLoggedIn');

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const handleLoginAttempt = () => {
		console.log('email', email);
		console.log('password', password);
	};

	return(
		<Navbar sticky="top"  bg="dark" variant="dark">
			<Container>
				<Nav className="me-auto">
					<Nav.Link href="/#">Home</Nav.Link>
				</Nav>
				{
					isUserAuthEd ?
					<>
					<Preferences />
					<Button className="mx-3">
						Logout
					</Button>
					</>
					:
					<Button
						className="mx-3"
						onClick={handleShow}
					>
						Login
					</Button>
				}
				<Modal show={showModal} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Fill out your credentials to login.</h4>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleLoginAttempt}>
							Login
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</Navbar>
	)
}

export default NavBar;
