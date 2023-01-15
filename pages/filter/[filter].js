
import Link from 'next/link';
import CMSFeed from '../../components/cmsFeed';
// import CMSPost from '../components/CMSPost';

const queryURL = (query) => `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`

export async function getStaticPaths() {
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(queryURL(categoryQuery)).then(res => res.json());
  const categories = categoryResult.result;
      return {
        paths: categories.map(category => "/filter/" + category.title),
        fallback: false,
      };
}

export async function getStaticProps({ params: { filter } }) {
  // const files = fs.readdirSync('posts');

    //https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20defined(slug.current)%5D%7B'slug'%3Aslug.current%7D

  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(queryURL(categoryQuery)).then(res => res.json());
  const categories = categoryResult.result;
  
  // const filteredQuery = encodeURIComponent(`*[_type == 'category']`);
  // const filteredResult = await fetch(queryURL(filteredQuery)).then(res => res.json());
  // const results = filteredResult.result;
  
  return {
    props: {
      categories
    },
  };
}



function FilterLink({ text, url }) {
  return (
    <div>
      <Link href={url}>
        <a className="bg-black text-white hover:opacity-75 m-7 p-3 rounded-md ">
          {text}
        </a>
      </Link>
    </div>
  );
}

export default function Home({ catagories }) {
  console.log(catagories)
  return (
    <div>
     {JSON.stringify(catagories, '\t')}
     <div className="flex justify-center container mx-auto ">
      {catagories.map(catagory=> (
        <FilterLink text={catagory.title} url={"/filter/"+catagory.title} />
      ))}
      </div>
    </div>
  );
}
