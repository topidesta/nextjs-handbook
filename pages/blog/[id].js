import { useRouter } from "next/router";
import posts from "../../data/posts.json";

export default () => {
  const router = useRouter();
  const post = posts[router.query.id];

  return (
    <>
      <h1>{post.judul}</h1>
      <p>{post.konten}</p>
    </>
  );
};
