import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner';

const CalendarCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Banner
          imageSrc="/esports-fifa.jpg"
          text="Sports Week"
          height="50"
        />
          <Carousel.Caption>
            <h3>🔥Warm up before the upcoming olympics 🔥</h3>
            <p>⚽ Compete in our fifa event before our upcoming olympic!</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Banner
        imageSrc="/gerobak-5.jpg"
        text="Gerobak"
        height="50"
        />
          <Carousel.Caption>
            <h3>Our food sale ensures you don't miss the taste of home 🇮🇩</h3>
            <p>Stay tooned for GEROBAK's future items! 🍛</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Banner
        imageSrc="/event-olympics24.jpg"
        text="SFIUA Olypmpic 2024"
        height="50"
        />
          <Carousel.Caption>
            <h3>✨ SFUIA's most anticipated annual event! ✨</h3>
            <p>🏟️ Join our olympics event and prove that you are among the best</p>
            <p>Now with basketball, volleyball, futsal, and badminton!</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CalendarCarousel;