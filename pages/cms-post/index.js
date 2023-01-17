import Link from 'next/link';
import CMSFeed from '../../components/CMSFeed';
import Filter from '../../components/Filters';

const queryURL = (query) => `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`


export async function getStaticProps() {
  
    //https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20defined(slug.current)%5D%7B'slug'%3Aslug.current%7D

  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title,categories[]-&gt;{category-&gt;}}`);
  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const results = result.result;
 

  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(queryURL(categoryQuery)).then(res => res.json());
  const categories = categoryResult.result;
  

  return {
    props: {
      results,
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
  

export default function Home({ results, categories }) {
  return (
    <div className="flex flex-col justify-center container mx-auto ">
      <div className="flex flex-row justify-center container mx-auto ">
        {categories.map((catagory) => (
          <FilterLink key={catagory.title} text={catagory.title} url={"/filter/" + catagory.title} />
        ))}
      </div>
      <CMSFeed posts={results} />
    </div>
  );
}
