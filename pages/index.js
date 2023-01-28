import CMSFeed from '../components/CMSFeed';
import Filter, {FilterLink} from '../components/Filters';
import { sanityQueryURL } from '../utils/utils';

export async function getStaticProps() {
  
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then((res) =>
    res.json()
  );
  const categories = categoryResult.result;

  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
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
      <Filter categories={categories}/>
      <CMSFeed posts={results} />
    </div>
  );
}
