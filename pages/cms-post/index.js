import Link from 'next/link';
import CMSPost from '../../components/CMSPost';
import { sanityQueryURL } from '../../utils/utils';


export async function getStaticProps() {
  
  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  const result = await fetch(sanityQueryURL(query)).then(res => res.json());
  const results = result.result;
 
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then(res => res.json());
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
        {categories.map((category) => (
          <FilterLink key={category.title} text={category.title} url={"/filter/" + category.title} />
        ))}
      </div>
      {results.map((post, ix) => <CMSPost key={ix} slug={post.slug} post={post} />)}
    </div>
  );
}
