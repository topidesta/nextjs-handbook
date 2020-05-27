import { useRouter } from "next/router";
import posts from "../../data/posts.json";

const withRouter = () => {
  const router = useRouter();
  const post = posts[router.query.id];
  // penyelesaian
  if (!post) return <p></p>;

  return (
    <>
      <h1>{post.judul}</h1>
      <p>{post.konten}</p>
    </>
  );
};

export default withRouter;
