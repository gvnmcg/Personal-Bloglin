import CMSPost from "./CMSPost";

export default function CMSFeed({ posts }) {
  return (
    <div>
      {/* <Feed /> */}
      {posts.map((post, ix) => <CMSPost key={ix} post={post} />)}
    </div>
  );
}
