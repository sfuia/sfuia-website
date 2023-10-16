import { Container } from "react-bootstrap";
import AllPosts from "../components/blog/all-posts";
import Calendar from "../components/Calendar";
import Banner from "components/Banner";

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Banner imageSrc="/team/22-23/blank.jpeg" text="Sports Week" height="50" />
      <div>
        <Calendar/>
      </div>
    </>
  );
}
