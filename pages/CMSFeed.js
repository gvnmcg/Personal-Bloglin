import CMSPost from "../components/CMSPost";

export async function getStaticProps() {
  
  const postQuery = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  const postResult = await fetch(sanityQueryURL(postQuery)).then(res => res.json());
  const posts = postResult.result;
 
  return {
    props: {
      posts,
    },
  };
}

export default function CMSFeed({ posts }) {
  return (
    <>
      {posts.map((post, ix) => <CMSPost key={ix} slug={post.slug} post={post} />)}
    </>
  );
}
