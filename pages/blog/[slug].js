import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { Container } from "react-bootstrap";
import PostBody from '../../components/blog/post-body'
import PostHeader from '../../components/blog/post-header'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../api/contentful'
import PostTitle from '../../components/blog/post-title'
import styles from '../../styles/post.module.scss'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
      <Container style={{marginTop: '1em', padding: '1.5em', backgroundColor: '#F8F4EA', fontSize: '1em', boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}
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
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
                          <hr />

              <PostBody content={post.content} />
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
