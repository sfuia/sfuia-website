import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner';

const CalendarCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Banner
          imageSrc="/ig-lemper.jpg"
          text="Sports Week"
          height="50"
        />
          <Carousel.Caption>
            <h3>✨ Stay active with SFUIA ✨</h3>
            <p>Play sports with your fellow students around Vancouver!</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Banner
        imageSrc="/ig-lemper-gerobak.jpg"
        text="Gerobak"
        height="50"
        />
          <Carousel.Caption>
            <h3>Our food sale ensures you don't miss the taste of home 🇮🇩</h3>
            <p>Stay tooned for GEROBAK's future items! 🍛</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CalendarCarousel;