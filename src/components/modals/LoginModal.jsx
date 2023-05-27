import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {login} from "../../services/authService";

const LoginModal = ({showModal, toggleModal}) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const handleLoginAttempt = async (e) => {
		e.preventDefault();

		const logIn = await login(email, password);
		debugger
		if (logIn.status && logIn.status === 200) {
			toggleModal(false)
		} else {
			if (logIn.status === 400) {
				if (logIn.errors?.length !== 0) {
					setErrors(logIn.errors)
				}
			}
		}
	};

	return (
		<Modal show={showModal} onHide={() => toggleModal(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Fill out your credentials to login.</h4>
				<Form onSubmit={handleLoginAttempt}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
						{!errors?.email?.length || errors?.email.map((error) => (<p className="text-danger p-1 m-1"> {error} </p>))}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						{!errors?.password?.length || errors?.password.map((error) => (<p className="text-danger p-1 m-1"> {error} </p>))}
					</Form.Group>

					<Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
						<Button variant="primary" type="submit">
							Login
						</Button>
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default LoginModal;
