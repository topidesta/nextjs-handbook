import posts from "../../data/posts.json";

const withRouter = props => {
  return (
    <div>
      <h1>{props.post.judul}</h1>
      <p>{props.post.konten}</p>
    </div>
  );
};

withRouter.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  };
};

export default withRouter;
