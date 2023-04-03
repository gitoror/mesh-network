import styles from "@/styles/postform.module.css";

const supabase = useSupabaseClient();

function createPost() {
  supabase
    .from("posts")
    .insert({
      message: "Hello world",
    })
    .then((response) => {
      if (!response.error) {
        setContent("");
        setUploads([]);
        if (onPost) {
          onPost();
        }
      }
    });
}

export default function PostForm() {
  return (
    <>
      <textarea
        className={styles.input_msg}
        types="text"
        placeholder="Envoyer un message"
      />
      <button type="submit" onClick={createPost} className={styles.submit}>
        Envoyer
      </button>
    </>
  );
}
