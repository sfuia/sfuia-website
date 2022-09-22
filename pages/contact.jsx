import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Banner from "components/Banner";
import styles from '../styles/contactForm.module.scss'

export default function Contact() {
  async function handleOnSubmit(e){
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
        if(!field.name) return;
        formData[field.name] = field.value;
        field.value="";
    });
    fetch('api/mail',{
      method: 'post',
      body: JSON.stringify(formData)
    })
    
  }

  return (
    <div className="contact">
      <Fade triggerOnce>
      <Banner
        imageSrc="/sfuia-team.jpeg"
        text="Contact Us"
        height="50"
      />
        <Container
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              flexDirection: "column",
              margin: "3em auto",
            }}
          >
          <h2>Contact Us</h2>
          <p>Have a question you want to ask the SFUIA team? Feel free to contact us!</p>
          <form method="post" onSubmit={handleOnSubmit}>
              <input className={styles.input} type="text" name="name" placeholder="Full name"/><br></br>
              <input className={styles.input} type="text" name="email" placeholder="Email"/><br></br>
              <input className={styles.input} type="text" name="subject" placeholder="Subject"/><br></br>
              <textarea className={styles.message} type="text"name="message" placeholder="Message"/><br></br>
            <input className={styles.submit} type="submit" value="Submit"/>
          </form>
        </Container>
      </Fade>
    </div>
    
  );
}
