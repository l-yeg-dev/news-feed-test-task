import {Button, Dropdown, Form, FormCheck} from "react-bootstrap";
import './style.scss';
import {useEffect, useState} from "react";
import {getPreferences, updatePreferences} from "../../services/preferences";

const Preferences = () => {
	const [preferences, setPreferences] = useState({
		categories: [],
		sources: [],
		authors: []
	});
	const [showPreferences, setShowPreferences] = useState(false);

	useEffect(() => {
			getPreferences().then(res => {
				setPreferences(res);
			})
	},[]);

	const handleChange = (event, preference, type) => {
		const preferenceType = preferences[type];
		preferenceType.find((item) => (item.id === preference.id)).selected = event.target.checked ? 1 : 0;
		setPreferences({...preferences, [type]: preferenceType});
	}
	const handleUpdatePreferences = () => {
		const payload = {
			categoryIds: preferences.categories.filter(item => item.selected).map(source => source.id),
			sourceIds: preferences.sources.filter(item => item.selected).map(category => category.id),
			authorIds: preferences.authors.filter(item => item.selected).map(author => author.id)
		};

		updatePreferences(payload).then((result) => {
			setPreferences(result.preferences)
			setShowPreferences(false);
		});
	};

	return(
		<Dropdown autoClose="outside" className="preferences">
			<Dropdown.Toggle id="dropdown-autoclose-false">
				Preferences
			</Dropdown.Toggle>
			<Dropdown.Menu className="preferences-dropdown border-0 text-center py-4" show={showPreferences}>
				<Form className="px-3" onSubmit={handleUpdatePreferences}>
				<Dropdown className="mt-3" drop="down">
					<Dropdown.Toggle id="dropdown-autoclose-false" className="px-3 py-1">
						Categories
					</Dropdown.Toggle>

					<Dropdown.Menu className="preference-menu">
								<div className="mb-3">
									{preferences.categories.map((category) =>(
										<FormCheck
											type="checkbox"
											checked={!!category.selected}
											id={`category-${category.id}`}
											key={`category-${category.id}`}
											label={category.name}
											onChange={(event) => handleChange(event, category, 'categories')}
									/>
									))}
								</div>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="mt-3" drop="down">
						<Dropdown.Toggle id="dropdown-autoclose-false"  className="px-3 py-1">
							Sources
						</Dropdown.Toggle>

						<Dropdown.Menu className="preference-menu">
								<div className="mb-3">
									{preferences.sources.map((source) =>(
										<FormCheck
											type="checkbox"
											checked={!!source.selected}
											id={`source-${source.id}`}
											key={`source-${source.id}`}
											label={source.name}
											onChange={(event) => handleChange(event, source, 'sources')}
										/>
									))}
								</div>
						</Dropdown.Menu>
					</Dropdown>
				<Dropdown  className="mt-3" drop="down">
					<Dropdown.Toggle id="dropdown-autoclose-false"  className="px-3 py-1">
						Authors
					</Dropdown.Toggle>

					<Dropdown.Menu className="preference-menu">
							<div className="mb-3">
								{preferences.authors.map((author) =>(
									<FormCheck
										type="checkbox"
										checked={!!author.selected}
										id={`author-${author.id}`}
										key={`author-${author.id}`}
										label={author.name}
										onChange={(event) => handleChange(event, author, 'authors')}
									/>
								))}
							</div>
					</Dropdown.Menu>
				</Dropdown>
					<Button type="submit" className="btn bg-white text-bg-info mt-3"> Save </Button>
				</Form>
			</Dropdown.Menu>
		</Dropdown>
	)
}
export default Preferences;
