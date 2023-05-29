import {Col, Container, Dropdown, DropdownButton, InputGroup, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss"
import {useEffect, useState} from "react";
import {getPreferences} from "../../services/preferences";

const Filters = ({filters, updateFilters}) => {
	const [filterData, setFilterData] = useState({categories: [], sources: []})
	useEffect(() => {
		getPreferences().then(result => {
			setFilterData({
				categories: result.categories,
				sources: result.sources
			});
		})
	},[]);

  return (
		<Container className="filters">
			<Row className="align-items-center border border-top-0 rounded py-3">
				<Col xs="12" sm="6" lg="4">
					<InputGroup className="mb-3 d-block text-center">
						<DropdownButton
							variant="outline-secondary"
							title={filterData.categories.find(category => category.id.toString() === filters.category)?.name || 'Select category'}
							id="input-group-dropdown-1"
						>
							{filterData.categories.map(category => (
								<Dropdown.Item
									key={`filter-category-${category.id}`}
									data-category-id={category.id}
									onClick={(e) => updateFilters({...filters, category: e.target.dataset.categoryId})}
								>
									{category.name}
								</Dropdown.Item>
							))}
						</DropdownButton>
					</InputGroup>
				</Col>
				<Col xs="12" sm="6" lg="4">
					<InputGroup className="mb-3 d-block text-center">
						<DropdownButton
							variant="outline-secondary"
							title={filterData.sources.find(source => source.id.toString() === filters.source)?.name  || 'Select source'}
							id="input-group-dropdown-1"
						>
							{filterData.sources.map(source => (
								<Dropdown.Item
									key={`filter-source-${source.id}`}
									data-source-id={source.id}
									onClick={(e) => updateFilters({...filters, source: e.target.dataset.sourceId})}
								>
									{source.name}
								</Dropdown.Item>
							))}
						</DropdownButton>
					</InputGroup>
				</Col>
				<Col xs="12" lg="4"  className="text-center">
					<div className="text-center">From date</div>
					<DatePicker
						selected={filters.date.startDate}
						onChange={(newDate) => updateFilters({...filters, date: {...filters.date, startDate: newDate}})}
					/>
					<div className="text-center">To date</div>
					<DatePicker
						selected={filters.date.endDate}
						onChange={(newDate) => updateFilters({...filters, date: {...filters.date, endDate: newDate}})}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Filters;
