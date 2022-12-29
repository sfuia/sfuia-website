import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <CoverImage title={title} url={coverImage.url} size={4} />
      </div>
      <div>
        <div style={{ display: "flex", gap: "1em", marginLeft: "1em" }}>
          {author && (
            <Avatar
              picture={author.picture}
            />
          )}
          <div>
            <h3 >{author.name}</h3>
            <div>
              <DateComponent dateString={date} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
