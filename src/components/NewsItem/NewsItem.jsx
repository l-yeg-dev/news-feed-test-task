import {Button, Card, Container} from "react-bootstrap";
import './style.scss'


const NewsItem = () => {
	const image = 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/zRVheeFjiQQHGCo6ZbDgoZkq/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882'
	return(
		<Container  className="pt-3 newsItem">
			<Card>
				<Card.Header
					className="newsItem__header"
					style={{backgroundImage: `url(${image})`}}
				>
					<h5 className="newsItem__title p-2">
						Featured
					</h5>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						NEWs item
					</Card.Title>
					<Card.Text>
						NEWs item content.
					</Card.Text>
					<Button variant="primary">
						NEWs link
					</Button>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default NewsItem;
