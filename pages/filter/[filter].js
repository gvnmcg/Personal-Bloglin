import Link from "next/link";
import CMSPost from "../../components/CMSPost";
import Filter from "../../components/Filters";
import { sanityQueryURL } from '../../utils/utils';

export async function getStaticPaths() {
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then((res) =>
    res.json()
  );
  const categories = categoryResult.result;
  return {
    paths: categories.map((category) => "/filter/" + category.title),
    fallback: false,
  };
}

export async function getStaticProps({ params: { filter } }) {

  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then((res) =>
    res.json()
  );
  const categories = categoryResult.result;
  const categoryIds = categories
    .filter((category) => category.title == filter)
    .map((category) => category._id);

  const filteredQuery = encodeURIComponent(`*[_type == 'post']`);
  const filteredResult = await fetch(sanityQueryURL(filteredQuery)).then((res) =>
    res.json()
  );
  const filteredPosts = filteredResult.result.filter((post) =>
    categoryIds.includes(post.categories[0]._ref)
  );
  const postsRefs = filteredResult.result.map(
    (post) => post.categories[0]._ref
  );

  return {
    props: {
      categories,
      filteredPosts,
      categoryIds,
      postsRefs,
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

export default function Home({
  categories,
  filteredPosts
}) {
  return (
    <div>
      <Filter catagories={categories} />
      {filteredPosts.map((post) => (
        <CMSPost key={post.title} slug={post.slug.current} post={post} />
      ))}
      <div className="flex justify-center container mx-auto "></div>
    </div>
  );
}
