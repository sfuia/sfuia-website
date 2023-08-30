import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner';

const EventCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Banner
        imageSrc="/sfuia-welcomeparty-all.jpeg"
        text="SFUIA'23 is Hiring"
        height="50"
        />
          <Carousel.Caption>
            <h3>Now is your chance to join the SFUIA executive committee</h3>
            <p>Apply by 25 August 2023</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Banner
        imageSrc="/sfuia-welcomeparty-all.jpeg"
        text="Gerobak"
        height="50"
        />
          <Carousel.Caption>
            <h3>Our biweekly food sale ensures you don't miss the taste of home 🇮🇩</h3>
            <p>More details coming soon!</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default EventCarousel;