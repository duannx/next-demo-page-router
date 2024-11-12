import { GetStaticProps } from "next";

async function getTime(): Promise<number> {
  return new Promise((res) => {
    setTimeout(() => {
      return res(Date.now());
    }, 1000);
  });
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = [1, 2, 3, 4, 5];

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post + "" },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

type Data = {
  now: number
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  // Call an external API endpoint to get posts
  const res = await getTime();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      now: res,
      id,
    },
  };
}

export default function StaticPage({ now, id }: Data) {
  return (
    <h1>
      This is a static fallback page. ID: {id}. Now: {new Date(now).toLocaleTimeString()}
    </h1>
  );
}
