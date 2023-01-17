import CMSPost from '../components/CMSPost';
// import CMSFeed from '../components/CMSFeed';
import Filter, {FilterLink} from '../components/Filters';
import { queryURL } from '../utils/utils';

export async function getStaticProps() {
  
  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const url1 = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${categoryQuery}`;

  const categoryResult = await fetch(url1).then((res) =>
    res.json()
  );
  const categories = categoryResult.result;

    //https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20defined(slug.current)%5D%7B'slug'%3Aslug.current%7D

  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title,categories[]-&gt;{category-&gt;}}`);
  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const results = result.result;
 
  return {
    props: {
      results,
      categories
    },
  };
}

export default function Home({ results, categories }) {
  return (
    <div>
      {/* <Filter categories={categories}/> */}
       <div className="flex flex-row container mx-auto">
        {categories.map((category) => (
          <FilterLink key={category.title} text={category.title} url={"/filter/" + category.title} />
        ))}
      </div>
      {results.map((post, ix) => <CMSPost key={ix} post={post} />)}
    </div>
  );
}
