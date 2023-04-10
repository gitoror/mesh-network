import styles from "@/styles/postform.module.css";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useEffect } from "react";

export default function PostForm() {
  const [msg, setMsg] = useState("");
  const [author, setAuthor] = useState("");

  async function addMessage() {
    if (author.length && msg.length) {
      const { data, error } = await supabase
        .from("messages")
        .insert({ msg: msg, author_name: author });
      if (!error) {
        setMsg("");
        setAuthor("");
      }
    }
  }

  return (
    <>
      <h2>Une question ?</h2>
      <br></br>
      <input
        className={styles.input_author}
        type="text"
        maxLength="30"
        placeholder="Nom"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br></br>
      <textarea
        className={styles.input_msg}
        type="text"
        maxLength="200"
        placeholder="Envoyer un message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={addMessage} className={styles.submit}>
        Envoyer
      </button>
      <br></br>
    </>
  );
}
