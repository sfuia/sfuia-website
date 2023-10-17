import { Container } from "react-bootstrap";
import AllPosts from "../components/blog/all-posts";
import Banner from "components/Banner";
import EventCalendar from "../components/EventCalendar";
import CalendarCarousel from "components/CalendarCarousel";

export default function Index({ preview, allPosts }) {
  return (
    <>
      <CalendarCarousel></CalendarCarousel>
      <EventCalendar/>
    </>
  );
}
