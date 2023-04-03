import Head from "next/head";
import Main from "@/components/main.js";
import styles from "@/styles/faq.module.css";
import PostForm from "@/components/PostForm";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Réseaux Mesh</title>
      </Head>
      <Main>
        <h2>Une question ?</h2>
        <br></br>
        <PostForm />
        <br></br>
      </Main>
    </>
  );
}
