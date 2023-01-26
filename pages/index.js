import CMSPost from '../components/CMSPost';
// import CMSFeed from '../components/CMSFeed';
import Filter, {FilterLink} from '../components/Filters';
import { sanityQueryURL } from '../utils/utils';

export async function getStaticProps() {
  
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  // const url1 = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${categoryQuery}`;

  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then((res) =>
    res.json()
  );
  const categories = categoryResult.result;


  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  // const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(sanityQueryURL(query)).then(res => res.json());
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
      <div className="container mx-auto flex flex-row">
        {categories.map((category) => (
          <FilterLink
            key={category.title}
            text={category.title}
            url={"/filter/" + category.title}
          />
        ))}
      </div>
      {results.map((post, ix) => (
        <CMSPost key={ix} slug={post.slug} post={post} />
      ))}
    </div>
  );
}
