import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { Container } from "react-bootstrap";
import PostBody from '../../components/blog/post-body'
import PostHeader from '../../components/blog/post-header'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../api/contentful'
import PostTitle from '../../components/blog/post-title'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
      <Container className='max-w-4xl mt-4 rounded p-6 bg-slate-200 text-base shadow'
      >
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article >
              <Head>
                <title>
                  {post.title} | Hello!
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                className="text-red-500"
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <hr />

              <PostBody className="font-black" content={post.content} />
            </article>
     
          </>
        )}
      </Container>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}
