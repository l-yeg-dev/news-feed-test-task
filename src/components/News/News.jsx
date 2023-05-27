import { useEffect } from "react";
import { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
import { getNews } from "../../services/news";
import NewsItem from "../NewsItem/NewsItem";


const News = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		getNews().then(newsRes => {
			console.log(newsRes);
			setNews(newsRes.data.news);
		}).catch((error) => {console.error(error.messsage)});
	}, []);

  return(
		<Container >
			<Row>
				{
					news.map((newsItem) => (
						<Col lg="3" md="4" xs="8" key={newsItem.id}>
							<NewsItem data={newsItem} />
						</Col>
					))
				}
			</Row>
		</Container>
	)
}

export default News;
