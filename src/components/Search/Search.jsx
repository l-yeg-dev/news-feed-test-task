import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import "./style.scss"

const Search = ({searchString, updateSearch}) => {

	const handleSearch = (event) => {
		event.preventDefault();
		updateSearch(event.target[0].value);
	}

  return (
			<Row className="justify-content-center pt-5 search">
				<Col xs={{span: 6}}>
					<Form onSubmit={handleSearch} action="#">
						<InputGroup className="mb-3">
							<Form.Control
								value={searchString}
								placeholder="Search"
							/>
							<Button variant="outline-secondary" id="button-addon2" type="submit">
								🔍
							</Button>
						</InputGroup>
					</Form>
				</Col>
			</Row>
	)
}

export default Search;
