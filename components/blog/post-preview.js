import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

export default function PostPreview({ title, coverImage, date, author, slug }) {
  return (
      <div style={{ borderRadius: "1em", backgroundColor: "#A6192E", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}>
        <div>
          <CoverImage title={title} slug={slug} url={coverImage.url} size={1} />
        </div>
        <div style={{ display: "flex", gap: "1em", marginLeft: "1em" }}>
          <div>
            <h3>
              <p style={{ color: "black", maxWidth: "480px" }}>{title}</p>
            </h3>
            <div>
              <DateComponent dateString={date} />
            </div>
          </div>
        </div>
      </div>
  );
}
