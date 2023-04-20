import CMSFeed from '../components/CMSFeed';
import Filter, { FilterLink } from '../components/Filters';
import { sanityQueryURL } from '../lib/utils';
import DBtest from './DBtest';

export async function getStaticProps() {
  
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then((res) =>
    res.json()
  );
  const categories = categoryResult.result;

  const postQuery = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  const postResult = await fetch(sanityQueryURL(postQuery)).then(res => res.json());
  const postResults = postResult.result;
 
  return {
    props: {
      postResults,
      categories
    },
  };
}

export default function Home({ postResults, categories }) {
  return (
    <div>
      <Filter categories={categories}/>
      {/* <DBtest/> */}
      <CMSFeed posts={postResults} />
    </div>
  );
}
