import Link from "next/link";
import posts from "../data/posts.json";

export default () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {Object.entries(posts).map((val, i) => {
          return (
            <li key={i}>
              <Link href="/blog/[id]" as={"/blog/" + val[0]} prefetch={false}>
                <a title="judul"> {val[1].judul}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
