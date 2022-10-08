import PostPreview from './post-preview'

export default function AllPosts({ posts }) {
  return (
    <section>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'space-around', flexWrap: 'wrap', gap: '1em'}}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            size={1}
          />
        ))}
      </div>
    </section>
  )
}
