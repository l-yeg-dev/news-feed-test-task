import {Col, Container, Dropdown, DropdownButton, InputGroup, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";


const Filters = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedSource, setSelectedSource] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const handleCategorySelect = (event) => setSelectedCategory(event.target.innerHTML)
	const handleSourceSelect = (event) => setSelectedSource(event.target.innerHTML)

  return (
		<Container className="filters">
			<Row className="align-items-center border rounded py-3">
				<Col xs="12" sm="6" lg="4">
					<InputGroup className="mb-3 d-block text-center">
						<DropdownButton
							variant="outline-secondary"
							title={selectedCategory || 'Select category'}
							id="input-group-dropdown-1"
							onChange={handleCategorySelect}
						>
							<Dropdown.Item onClick={handleCategorySelect} value="Cat 1">Cat 1</Dropdown.Item>
							<Dropdown.Item href="#">Cat 2</Dropdown.Item>
							<Dropdown.Item href="#">Cat 3</Dropdown.Item>
						</DropdownButton>
					</InputGroup>
				</Col>
				<Col xs="12" sm="6" lg="4">
					<InputGroup className="mb-3 d-block text-center">
						<DropdownButton
							variant="outline-secondary"
							title={selectedSource || 'Select source'}
							id="input-group-dropdown-1"
						>
							<Dropdown.Item onClick={handleSourceSelect} href="#">Source 1</Dropdown.Item>
							<Dropdown.Item onClick={handleSourceSelect} href="#">Source 2</Dropdown.Item>
							<Dropdown.Item onClick={handleSourceSelect} href="#">Source 3</Dropdown.Item>
						</DropdownButton>
					</InputGroup>
				</Col>
				<Col xs="12" lg="4"  className="text-center">
					<div className="text-center">From date</div>
					<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
					<div className="text-center">To date</div>
					<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
				</Col>
			</Row>
		</Container>
	)
}

export default Filters;
