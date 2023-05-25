import {Dropdown, Form, FormCheck} from "react-bootstrap";
import './style.scss';

const Preferences = () => {
	 const handleChange = (event) => {
		 console.log(event.target.checked);
	 }
	return(
		<Dropdown autoClose={false} className="preferences" align="end">
			<Dropdown.Toggle id="dropdown-autoclose-false" >
				Preferences
			</Dropdown.Toggle>
			<Dropdown.Menu className="preferences-dropdown border-0 text-center">
				<Dropdown className="mt-3" drop="start">
					<Dropdown.Toggle id="dropdown-autoclose-false" className="px-3 py-1">
						Categories
					</Dropdown.Toggle>

					<Dropdown.Menu className="preference-menu">
						<Form className="px-3">
								<div className="mb-3">
									<FormCheck
										type="checkbox"
										id={`item1`}
										label={`item1`}
										onChange={handleChange}
									/>
									<FormCheck
										type="checkbox"
										id={`item2`}
										label={`item2`}
										onChange={handleChange}
									/>
								</div>
						</Form>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="mt-3" drop="start">
						<Dropdown.Toggle id="dropdown-autoclose-false"  className="px-3 py-1">
							Sources
						</Dropdown.Toggle>

						<Dropdown.Menu className="preference-menu">
							<Form className="px-3">
								<div className="mb-3">
									<FormCheck
										type="checkbox"
										id={`default-item`}
										label={`default-item`}
									/>
									<FormCheck
										type="checkbox"
										id={`default-item1`}
										label={`default-item1`}
									/>
								</div>
							</Form>
						</Dropdown.Menu>
					</Dropdown>
				<Dropdown  className="mt-3" drop="start">
					<Dropdown.Toggle id="dropdown-autoclose-false"  className="px-3 py-1">
						Authors
					</Dropdown.Toggle>

					<Dropdown.Menu className="preference-menu">
						<Form className="px-3">
							<div className="mb-3">
								<FormCheck
									type="checkbox"
									id={`default-item`}
									label={`default-item`}
								/>
								<FormCheck
									type="checkbox"
									id={`default-item1`}
									label={`default-item1`}
								/>
							</div>
						</Form>
					</Dropdown.Menu>
				</Dropdown>
			</Dropdown.Menu>
		</Dropdown>
	)
}
export default Preferences;
