import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/faq.module.scss'

export default function Contact() {
    return (
        <div className="faq">
        <Fade triggerOnce>
        
            <Container
                style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "left",
                alignItems: "left", 
                flexDirection: "column",
                margin: "3em auto",
                }}
            >
            <h2>Everything you want to know</h2>
            <h3>about SFUIA</h3>
            <p>Have any other questions not listed below? Feel free to contact us!</p>
            
            <Accordion className={styles.accordion} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accHeader}>I&apos;m interested in joining SFUIA as an executive, how do I sign up?</Accordion.Header>
                    <Accordion.Body className={styles.accBody}>
                    SFUIA executives are selected at the end of the summer term, usually around July. There is
                    no exact date for when we are hiring for execs, but you can follow our instagram
                    @sfuia and keep an eye out for posts around that time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are SFUIA events exclusive for SFU students?</Accordion.Header>
                    <Accordion.Body>
                        No! Our events are open to the indonesian community in Canada and anyone interested are free
                        to join in and meet everyone. We welcome students from other universities/colleges 
                        to participate in our events and mingle with our community.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What are some of SFUIA&apos;s biggest events that I should keep an eye out for?</Accordion.Header>
                    <Accordion.Body>
                        The largest SFUIA event that we hold anually is the SFUIA olympics. We will be holding
                        competitions for soccer, basketball and volleyball with grand prizes for winning teams! <br></br> Another major event that SFUIA is involved in is FIESTA; a gathering event made in collaboration with
                        GISAU and PERMIKA which aims to bring the taste of Indonesian Food to Vancouver!
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="2">
                    <Accordion.Header>Are SFUIA events exclusive for SFU students?</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
            
            </Container>
        </Fade>
        </div>
        
    );
}
