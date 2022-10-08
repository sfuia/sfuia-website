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
              // style={{ width: '100%' }}
            />
          )}
          <div>
            <h3 className="text-3xl mb-3 leading-snug">{author.name}</h3>
            <div className="text-lg mb-4">
              <DateComponent dateString={date} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
