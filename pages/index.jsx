import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Container, Carousel } from "react-bootstrap";
export default function Home() {
  return (
    <div>
      <div className="navbar-overlay">
        <div className="image-container" style={{height: '100vh', width: '100%', position: 'relative'}}>
          <Image 
            src="https://educationsnapshots.com/wp-content/uploads/sites/4/2021/09/simon-fraser-university-burnaby-plaza-renewal-12.jpg"
            layout="fill"
            objectFit='cover'
            margin="auto"
          ></Image>
        </div>
        <Carousel.Caption
          style={{ top: "50%", bottom: "50%", color: 'black'}}
          className="animated fadeInDown"
        >
          <h1
            className="carousel-title"
            style={{
              zIndex: "100",
              fontSize: "4em"
            }}
          >
            <span style={{ background: 'rgba(204, 204, 204, 0.8)'}}>
            Simon Fraser University Indonesian Association
            </span>
          </h1>
        </Carousel.Caption>
      </div>
      <Container className={styles.about}>
        <div style={{width: "50%"}}>
            <h2>About Us</h2>
            <p>Our aim is to gather people and create a friendly community to enjoy and connect with.
We host events for Indonesian students, ranging from cultural events, sports tournaments to social gathering. Come and join us, we are here to make your experience memorable. </p>
        </div>
        <div>
            <img src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" width="100%"></img>
        </div>
      </Container>
    </div>
  );
}
