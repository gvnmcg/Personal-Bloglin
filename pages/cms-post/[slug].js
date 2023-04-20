import BlockContent from "@sanity/block-content-to-react";
import { sanityQueryURL } from '../../lib/utils';

export async function getStaticPaths() {
  const query = encodeURIComponent(
    `*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`
  );

  const result = await fetch(sanityQueryURL(query)).then((res) => res.json());
  const results = result.result;
  const paths = results.map((slugObject) => "/cms-post/" + slugObject.slug);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${slug}" ]`
  );

  const result = await fetch(sanityQueryURL(query)).then((res) => res.json());
  const post = result.result[0];

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }) {
  return (
    <div className="prose mx-auto rounded-md bg-white p-7">
      <h1>{post.title}</h1>
      <BlockContent
        blocks={post.body}
        projectId={"20qe52oi"}
        dataset={"production"}
      />
    </div>
  );
}
