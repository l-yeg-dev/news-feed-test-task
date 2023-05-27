import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {register} from "../../services/authService";

const RegistrationModal = ({showModal, toggleModal}) => {

	const [firstName, setFirstname] = useState('');
	const [lastName, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const [errors, setErrors] = useState([]);
	const handleRegisterAttempt = async (e) => {
		e.preventDefault();
		const payload = {
			firstName,
			lastName,
			email,
			password,
			passwordRepeat
		}
		const response = await register(payload)
		if (response.status && response.status === 200) {
			toggleModal(false)
		} else {
			if (response.status === 400) {
				if (response.errors?.length !== 0) {
					setErrors(response.errors)
				}
			}
		}
	}


	return (
		<Modal show={showModal} onHide={() => toggleModal(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Register</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Fill out your credentials to register.</h4>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Firstname</Form.Label>
						<Form.Control
							placeholder="Enter firstname"
							value={firstName}
							onChange={(event) => setFirstname(event.target.value)}
						/>
						{!errors?.firstName?.length || errors?.firstName.map((error) => (<p className="text-danger p-1 m-1"> {error} </p>))}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Lastname</Form.Label>
						<Form.Control
							placeholder="Enter lastname"
							value={lastName}
							onChange={(event) => setLastname(event.target.value)}
						/>
						{!errors?.lastName?.length || errors?.lastName.map((error) => (<p className="text-danger p-1 m-1"> {error} </p>))}
					</Form.Group>
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

					<Form.Group className="mb-3" controlId="formPasswordRepeat">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Repeat password"
							value={passwordRepeat}
							onChange={(event) => setPasswordRepeat(event.target.value)}
						/>
						{!errors?.passwordRepeat?.length || errors?.passwordRepeat.map((error) => (<p className="text-danger p-1 m-1"> {error} </p>))}
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
