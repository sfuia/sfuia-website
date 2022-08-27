import Head from "next/head";
import Image from "next/image";
import PersonCard from 'components/PersonCard'
import{ Container } from 'react-bootstrap'
import people from 'data/people.json'

export default function Team() {
  return (
    <Container>
      <h2 style={{textAlign: 'center'}}>SFUIA 2022/2023 Team</h2>
      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      {people.map(({id, name, description}) => {
        return <PersonCard key={id} name={name} description={description} />
      })}
      </div>

    </Container>
  )
}