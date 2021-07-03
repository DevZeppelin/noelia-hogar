import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";


export default function Artesanias({ blogs }) {
  return (
    <div>
      <Head>
        <title>Noelia Artesanías</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogLayout
          tag="escritos"
          title="Artesanías 🏺"
          blogs={blogs}
          
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["artesanias"])
  );

  console.log(blogs);

  return {
    props: {
      blogs: blogs,
    },
  };
}
