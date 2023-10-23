import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner';

const EventCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Banner
          imageSrc="/ig-lemper.jpg"
          text="LEMPER"
          height="50"
        />
          <Carousel.Caption>
            <h3>✨ Let's Meet In Person ✨</h3>
            <p>🌟 Join us at SFUIA's LEMPER Welcoming Party! 🤝 Get ready for games and exciting activities to make new friends and have a blast. 🎉</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Banner
        imageSrc="/gerobak-2.png"
        text="Gerobak"
        height="50"
        />
          <Carousel.Caption>
            <h3>Our food sale ensures you don't miss the taste of home 🇮🇩</h3>
            <p>Don't miss out on preordering our GEROBAK's delicious nasi kulit & telor balado for $11 before 12 pm on Friday, September 29th. 🍛</p>
            <p>Preorder GEROBAK through the LEMPER registration link!</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default EventCarousel;