import Link from "next/link";

const withRouter = (props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <style jsx>
        {`
          h1 {
            font-size: ${props.size}rem;
          }
        `}
      </style>
      <Link href="/blog">
        <a title="blog">Blog</a>
      </Link>
    </div>
  );
};

export default withRouter;
