
import Link from 'next/link';
import Feed from './cmsFeed';
import CMSPost from '../components/CMSPost';
// import Post from '../components/Post';
// import Nav from '../components/Nav';

// export async function getStaticProps() {
//   // const files = fs.readdirSync('posts');

//   // const posts = files.map((fileName) => {
//   //   const slug = fileName.replace('.md', '');
//   //   const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
//   //   const { data: frontmatter } = matter(readFile);
//   //   return {
//   //     slug,
//   //     frontmatter,
//   //   };
//   // });
//     //https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20defined(slug.current)%5D%7B'slug'%3Aslug.current%7D

//   const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
//   const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;
//   console.log(url)

//   const result = await fetch(url).then(res => res.json());
//   const results = result.result;
//   const posts = results.map( slugObject => ({
//       params: slugObject.slug
//     })
//   )

//   return {
//     props: {
//       posts
//     },
//   };
// }

export default function CMSFeed({ posts }) {
  
  console.log(posts)
  return (
    <div>
      {/* <Feed /> */}
      {posts.map(({ params }) => (
        <div key={params.title}>
          {/* <CMSPost title={params.title} slug={params.slug}/> */}
          <Link key={params} href={`/cms-post/${params}`}>
            <a>{params}</a>
          </Link>
        </div>
      ))}
      {/* {posts.map((post) => (
        <div key={params.title}>
          <CMSPost post={post}/>
          <Link key={params} href={`/cms-post/${params}`}>
            <a>{params}</a>
          </Link>
        </div>
      ))} */}
    </div>
  );
}
