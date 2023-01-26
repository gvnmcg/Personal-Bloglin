import CMSPost from "./CMSPost";

export default function CMSFeed({ posts }) {
  return (
    <>
      {posts.map((post, ix) => <CMSPost key={ix} slug={post.slug} post={post} />)}
    </>
  );
}
