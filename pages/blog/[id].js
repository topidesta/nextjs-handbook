import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <>
      <h1>Blog Post</h1>
      <p>Post: id: {router.query.id}</p>
    </>
  );
};
