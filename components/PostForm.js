import styles from "@/styles/postform.module.css";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useEffect } from "react";

export default function PostForm() {
  const [msg, setMsg] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [msgs, setMsgs] = useState([{ id: 0, msg: "0" }]);
  const addMessage = async () => {
    // supabase.from("messagesT").insert({ id: "6", message: "Ok" });

    const { data, error } = await supabase
      .from("messagesT")
      .insert([{ msg: { msg } }]);
  };

  useEffect(() => {
    const fetchMsg = async () => {
      const { data, error } = await supabase.from("messagesT").select();

      if (error) {
        setFetchError("Could not fetch the msgs");
        setMsgs(null);
      }
      if (data) {
        setMsgs(data);
        setFetchError(null);
      }
    };

    fetchMsg();
  }, []);
  return (
    <>
      <textarea
        className={styles.input_msg}
        types="text"
        placeholder="Envoyer un message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={addMessage} className={styles.submit}>
        Envoyer
      </button>
      <br></br>
      <div>
        <>
          {msgs.map((m, k) => (
            <p>{m.msg}</p>
          ))}
        </>
      </div>
    </>
  );
}
