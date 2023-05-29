import {Card, Container} from "react-bootstrap";
import './style.scss'


const NewsItem = ({data}) => {
	return(
		<Container  className="pt-3 newsItem">
			<Card>
				<Card.Header
					className="newsItem__header"
					style={{backgroundImage: `url(${data.imageUrl})`}}
				>
					<h5 className="newsItem__title p-2 text-truncate rounded">
						{data.title}
					</h5>
					<div className="text-end">
						<p className="badge bg-primary">{data.author.name}</p>
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						<h6>{data.title}</h6>
					</Card.Title>
					<Card.Text>
						{data.content}
					</Card.Text>
					<a href={data.url} target="_blank" className="btn btn-primary btn-sm" rel="noreferrer" >
						Open Article
					</a>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default NewsItem;
