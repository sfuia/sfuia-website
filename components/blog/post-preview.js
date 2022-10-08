import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  author,
  slug,
}) {
  return (
    <div style={{ borderRadius: '1em', backgroundColor: '#A6192E' }}>
      <div>
        <CoverImage title={title} slug={slug} url={coverImage.url} size={1} />
      </div>
      <div style={{display: 'flex', gap: '1em', marginLeft: '1em'}}>
        {author && (
          <Avatar
            picture={author.picture}
            // style={{ width: '100%' }}
          />
        )}
        <div>
          <h3 className="text-3xl mb-3 leading-snug">
            <Link href={`/blog/${slug}`}>
              <a className="hover:underline" style={{color: 'black'}}>{title}</a>
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <DateComponent dateString={date} />
          </div>
      
        </div>
      </div>
    </div>
  );
}
