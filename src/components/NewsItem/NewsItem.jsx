import {Button, Card, Container} from "react-bootstrap";
import './style.scss'


const NewsItem = ({data}) => {
	return(
		<Container  className="pt-3 newsItem">
			<Card>
				<Card.Header
					className="newsItem__header"
					style={{backgroundImage: `url(${data.imageUrl})`}}
				>
					<h5 className="newsItem__title p-2">
						{data.status}
					</h5>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						{data.title}
					</Card.Title>
					<Card.Text>
						{data.content}
					</Card.Text>
					<Button variant="primary">
						{data.link}
					</Button>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default NewsItem;
