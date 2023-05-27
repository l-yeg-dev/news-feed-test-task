import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";

const Search = () => {
  return (
			<Row className="justify-content-center pt-5">
				<Col xs={{span: 6}}>
					<InputGroup className="mb-3 ">
						<Form.Control
							placeholder="Search"
						/>
						<Button variant="outline-secondary" id="button-addon2">
							🔍
						</Button>
					</InputGroup>
				</Col>
			</Row>
	)
}

export default Search;
