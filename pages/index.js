import Link from "next/link";

const withRouter = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a title="blog">Blog</a>
      </Link>
    </div>
  );
};

export default withRouter;
