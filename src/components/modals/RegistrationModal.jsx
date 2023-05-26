import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";

const RegistrationModal = ({showModal, toggleModal}) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const handleRegisterAttempt = () => {
		console.log()
	}

	useEffect(() => {

	}, [])

	return (
		<Modal show={showModal} onHide={() => toggleModal(false)}>
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

					<Form.Group className="mb-3" controlId="formPasswordRepeat">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Repeat password"
							value={passwordRepeat}
							onChange={(event) => setPasswordRepeat(event.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => toggleModal(false)}>
					Close
				</Button>
				<Button variant="primary" onClick={handleRegisterAttempt}>
					Register
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default RegistrationModal;
