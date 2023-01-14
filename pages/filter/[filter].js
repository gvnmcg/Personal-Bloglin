
import Link from 'next/link';
import CMSFeed from '../../components/cmsFeed';
// import CMSPost from '../components/CMSPost';


export async function getStaticPaths() {

      return {
        paths: [
            "/filter/movies",
            "/filter/music",
          ],
        fallback: false,
      };
}

export async function getStaticProps({ params: { filt } }) {
  // const files = fs.readdirSync('posts');

    //https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20defined(slug.current)%5D%7B'slug'%3Aslug.current%7D

  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  const query = encodeURIComponent(`*[_type == 'category' ]`);
  const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const results = result.result;
  // const posts = results.map( slugObject => ({
  //     params: slugObject.slug
  //   })
  // )

  return {
    props: {
      results
    },
  };
}

export default function Home({ results }) {
  
  return (
    <div>
     
    </div>
  );
}
