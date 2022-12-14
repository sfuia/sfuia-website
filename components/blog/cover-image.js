import ContentfulImage from './contentful-image'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ size, title, url, slug }) {
  const image = (
    <ContentfulImage
      width={500 * size}
      height={250 * size}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
      style={{borderRadius: '1em', border: '1px solid black'}}

    />
  )

  return (
    <div>
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
