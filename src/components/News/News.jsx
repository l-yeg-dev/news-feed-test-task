import React, {useEffect} from "react";
import { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
import { getNews } from "../../services/news";
import NewsItem from "../NewsItem/NewsItem";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";


const News = () => {
	const [news, setNews] = useState([]);
	const [filters, setFilters] = useState({category: null, source:null, date: {startDate: null, endDate: null}, search: null})

	useEffect(() => {
		const dates = {...filters.date};
		dates.startDate = formatDate(dates.startDate)
		dates.endDate = formatDate(dates.endDate)
		getNews({filters: {...filters, date: dates}}).then(newsRes => {
			setNews(newsRes.data.news);
		}).catch((error) => {console.error(error.messsage)});
	}, [filters]);

	const formatDate = (date) => {
		if (!date) {
			return ;
		}
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

  return(
		<Container >
			<Search
				searchSrting={filters.search}
				updateSearch={(value) => setFilters({...filters, search: value})}
			/>
			<Filters filters={filters} updateFilters={setFilters}/>
			<Row>
				{
					news.length > 0
					?
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
						:
						<h1 className="py-3 mt-3 text-center"> No results</h1>
				}
			</Row>
		</Container>
	)
}

export default News;
