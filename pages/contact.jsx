import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Banner from "components/Banner";

export default function Contact() {
  async function handleOnSubmit(e){
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
        if(!field.name) return;
        formData[field.name] = field.value;
    });
    fetch('api/mail',{
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData)
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
          <h3 style={{marginBottom:"3rem"}}>Have a question you want to ask the SFUIA team? Feel free to contact us!</h3>
          <form method="post" onSubmit={handleOnSubmit}>
              <input style={{padding:'0.5rem', margin:"0.2rem", width:"750px", backgroundColor:"#E2F8FF"}} type="text" name="name" placeholder="Full name"/><br></br>
              <input style={{padding:'0.5rem', margin:"0.2rem", width:"750px", backgroundColor:"#E2F8FF"}} type="text" name="email" placeholder="Email"/><br></br>
              <input style={{padding:'0.5rem', margin:"0.2rem", width:"750px", backgroundColor:"#E2F8FF"}} type="text" name="subject" placeholder="Subject"/><br></br>
              <textarea style={{padding:'0.5rem', margin:"0.2rem", width:"750px", height:"200px", backgroundColor:"#E2F8FF"}} type="text"name="message" placeholder="Message"/><br></br>
            <input style={{padding:'0.5rem', margin:"0.2rem"}} type="submit" value="Submit"/>
          </form>
        </Container>
      </Fade>
    </div>
    
  );
}
