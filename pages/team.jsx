import Head from "next/head";
import Image from "next/image";
import PersonCard from "components/PersonCard";
import Banner from "components/Banner";
import { Container } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import people from "data/people.json";

export default function Team() {
  // // {for (const key in people) {
  //   console.log(Object.keys(people)
  //   )
  // }}
  // const section = [];
  // for (let i = 0; i < people.length; i++) {
  //   section.push(Object.keys(people[i]))
  // }
  const rows = [];
  for (let i = 0; i < people.length; i++) {
    let teamName = Object.keys(people[i]);

    let peopleInTeam = people[i][teamName].map(({ id, name, description, imgSrc }) => {
      return (
        <Fade key={id} triggerOnce>
          <PersonCard name={name} description={description} imgSrc={imgSrc} />
        </Fade>
      );
    });
    rows.push(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {peopleInTeam}
      </div>
    );
  }

  // for (let i = 0; i )
  return (
    <div>
      <Banner
        imageSrc="/sfuia-welcomeparty-team.jpeg"
        text="Team"
        height="50"
      />
      <Container>
        <h1 style={{ textAlign: "center" }}>SFUIA 2022/ 2023 Team</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          {people.map((currElement, index) => {
            return (
              <Fade triggerOnce key={index}>
                <div
                  style={{
                    // backgroundColor: "#A6192E",
                    border: '1em solid #A6192E',
                    margin: "2em 0 2em",
                    // borderRadius: "15%",
                  }}
                >
                  <h2 style={{ textAlign: "center" }}>
                    {Object.keys(people[index])}
                  </h2>
                  <div>{rows[index]}</div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
