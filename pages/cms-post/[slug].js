// import fs from 'fs';
// import matter from 'gray-matter';
import BlockContent from '@sanity/block-content-to-react';
// import imageUrlBuilder from '@sanity/image-url';
// import ReactMarkdown from 'react-markdown'

export async function getStaticPaths() {
//   const files = fs.readdirSync('posts');


  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;
  console.log(url)

  const result = await fetch(url).then(res => res.json());
  const results = result.result;
  const paths = results.map( slugObject => "/cms-post/"+slugObject.slug)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("[slug] getStaticProps",slug)
  // https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20slug.current%20%3D%3D%20%22aoty-22%22%20%5D
  //*[ _type == "post" && slug.current == "atoty-22" ]
  // const query = encodeURIComponent(`*[ _type == "post" && slug.current == "aoty-22" ]`);
  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${slug}" ]`);
  const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  return {
    props: {
      // body: post.body,
      // title: post.title,
      post
    }
  };
}

export default function PostPage({post }) {
  console.log("[slug] getStaticProps, post:",post)
  return (
    <div className='prose mx-auto'>
      <h1>{post.title}</h1>
      <BlockContent blocks={post.body} />
      {/* <ReactMarkdown className='bg-white rounded-md p-7'>{content}</ReactMarkdown>  */}
    </div>
  );
}
