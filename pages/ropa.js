import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";


export default function Ropa({ blogs }) {
  return (
    <div>
      <Head>
        <title>Noelia Ropa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        
          <BlogLayout
            tag="news"
            title="Ropa 👕"
            blogs={blogs}            
          />
        
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["ropa"])
  );

  console.log(blogs);
  console.log(blogs.results[0].data);

  return {
    props: {
      blogs: blogs,
    },
  };
}
