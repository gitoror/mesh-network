import Head from "next/head";
import Main from "@/components/main.js";
import styles from "@/styles/faq.module.css";
import PostForm from "@/components/PostForm";
import Questions from "@/components/Questions";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Réseaux Mesh</title>
      </Head>
      <Main>
        <PostForm />
        <br></br>
        <Questions />
      </Main>
    </>
  );
}
