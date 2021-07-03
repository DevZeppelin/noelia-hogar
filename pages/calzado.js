import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Calzado({blogs}) {
  return (
    <div>
      <Head>
        <title>Noelia Calzado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="calzado" title="Calzado 👟" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["calzado"])
    );
      
    return {
      props: {
        blogs: blogs,       
      },
    };
  }
 
