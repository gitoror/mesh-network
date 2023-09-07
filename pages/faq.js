import Head from "next/head";
import Main from "@/components/main.js";
import styles from "@/styles/faq.module.css";
import PostForm from "@/components/PostForm";
import Questions from "@/components/Questions";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    async function handleTime() {
      const { date } = await fetch("/api/handleTime").then((res) => res.json());
      console.log("date ! ! ", date);
    }
    handleTime();
  }, []);

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
