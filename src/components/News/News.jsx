import React, { useEffect } from "react";
import { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
import { getNews } from "../../services/news";
import NewsItem from "../NewsItem/NewsItem";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";


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
			<Search />
			<Filters />
			<Row>
				{
					news.map((newsItem) => (
						<Col
							xs={{span:10, offset:1}}
							sm={{span:8, offset:2}}
							md={{span:4, offset:0}}
							xl="3"
							key={newsItem.id}>
							<NewsItem data={newsItem} />
						</Col>
					))
				}
			</Row>
		</Container>
	)
}

export default News;
