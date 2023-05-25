import {Carousel} from "react-bootstrap";
import './styles.scss'

const Slider = () => {
	const image = 'https://codersera.com/blog/wp-content/uploads/2021/11/React.jpeg';
	return (
		<Carousel className="news-carousel">
					<Carousel.Item>
						<Carousel.Caption
							style={{
								backgroundImage: `url(${image})`,
							}}
						>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Carousel.Caption
							style={{
								backgroundImage: `url(${image})`,
							}}
						>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Carousel.Caption
							style={{
								backgroundImage: `url(${image})`,
							}}
						>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
	)
}

export default Slider
