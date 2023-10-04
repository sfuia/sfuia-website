import { Container } from "react-bootstrap";
import AllPosts from "../components/blog/all-posts";
import { getAllPostsForHome } from "./api/contentful";
import Head from "next/head";
import Banner from "components/Banner";

export default function Index({ preview, allPosts }) {
  console.log(`${process.env.CONTENTFUL_SPACE_ID}`)
  console.log(`${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`)
  console.log(`${process.env.CONTENTFUL_ACCESS_TOKEN}`)
  return (
    <>
      <Banner imageSrc="/team/22-23/blank.jpeg" text="Blog" height="50" />
      <Container style={{paddingTop: '5em'}}>
        {allPosts.length > 0 && <AllPosts posts={allPosts} />}
      </Container>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
