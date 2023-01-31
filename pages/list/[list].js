import BlockContent from "@sanity/block-content-to-react";
import { sanityQueryURL } from '../../utils/utils';

export async function getStaticPaths() {
  const query = encodeURIComponent(
    `*[_type == 'list' ]`
  );

  const result = await fetch(sanityQueryURL(query)).then((res) => res.json());
  const results = result.result;
  const paths = results.map((slugObject) => "/list/" + slugObject.slug.current);
  // const paths = results

  console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { list } }) {
  console.log(list)

  const query = encodeURIComponent(
    `*[ _type == "list" && slug.current == "${list}" ]`
  );

  const result = await fetch(sanityQueryURL(query)).then((res) => res.json());
  const post = result.result[0];

  return {
    props: {
      post,
    },
  };
}

export default function ListPage({ post }) {
  console.log(post)

  return (
    <div className="prose mx-auto rounded-md bg-white p-7">
      {JSON.stringify(post)}
      <h1>{post.title}</h1>
      <BlockContent
        blocks={post.body}
        projectId={"20qe52oi"}
        dataset={"production"}
      />
      {post.list.map((entry, entryIndex) => (
        <div key={entry.entryID} className="bg-slate-400">
          <h1>{entry,entryIndex + 1}</h1>
          {entry.entryID}
        </div>
      ))}
    </div>
  );
}
