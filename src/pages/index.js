import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "components/BlogCard";
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cld8xt8n806s901upeb2i0a6d/master"
);

const apiDatas = gql`
  {
    posts {
      title
      updatedAt
      datePublished
      coverPhoto {
        id
        url
      }
      createdBy {
        id
      }
      author {
        id
        name
        avatar {
          id
          url
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(apiDatas);
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            createdBy={post.createdBy}
            coverPhoto={post.coverPhoto}
          />
        ))}
      </main>
    </>
  );
}
