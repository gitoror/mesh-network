import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import styles from "@/styles/questions.module.css";

function format_date(date) {
  // Format date as: 11 février 2023
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("fr", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("fr", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("fr", { day: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}`;
}

export default function Questions() {
  const [quests, setQuests] = useState([]);
  useEffect(() => {
    getQuests();
  }, [quests]);

  async function getQuests() {
    const { data, error } = await supabase
      .from("messages")
      .select()
      .order("created_at", { ascending: false });
    if (data) {
      console.log(data);
      setQuests(data);
    }
  }

  async function addLike(id, nb_likes) {
    const { data, error } = await supabase
      .from("messages")
      .update({ like_count: nb_likes + 1 })
      .eq("id", id);
  }

  return (
    <div>
      <h2>Questions posées</h2>
      <br></br>

      {quests.map((q) => (
        <article
          key={q.id}
          style={{
            border: "solid 1px #ccc",
            "border-width": "1px",
            "border-radius": "5px",
            padding: "5px 16px 5px 16px",
            "margin-bottom": "10px",
            "min-height": "60px",
            dispaly: "flex",
            "box-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <div style={{ "margin-bottom": "3px" }}>
            <p style={{ "font-weight": "600" }}>
              {q.author_name} <span>·</span> {format_date(q.created_at)}
            </p>
          </div>
          <div style={{ "margin-bottom": "10px" }}>
            <p>{q.msg}</p>
          </div>
          <div>
            <div style={{ display: "inline-flex" }}>
              <button className={styles.like} onClick={() => showAnswers()}>
                <FaRegCommentDots size={15} style={{ color: "#A9A9A9" }} />
              </button>
              {q.comment_count}
            </div>{" "}
            <span style={{ "font-weight": "700" }}>·</span>
            <div style={{ display: "inline-flex", "align-items": "center" }}>
              <button
                className={styles.like}
                onClick={() => addLike(q.id, q.like_count)}
              >
                <AiTwotoneLike size={15} style={{ color: "#D22B2B" }} />
              </button>
              <span style={{ "font-size": "12px" }}>{q.like_count}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
