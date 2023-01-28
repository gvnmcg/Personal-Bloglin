import Link from "next/link";
import CMSPost from "../../components/CMSPost";
import CMSFeed from "../../components/CMSFeed";
import Filter from "../../components/Filters";
import { sanityQueryURL } from "../../utils/utils";

export async function getStaticPaths() {
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then(
    (res) => res.json()
  );
  const categories = categoryResult.result;
  return {
    paths: categories.map((category) => "/filter/" + category.title),
    fallback: false,
  };
}

export async function getStaticProps({ params: { filter } }) {
  //get categories
  const categoryQuery = encodeURIComponent(`*[_type == 'category' ]`);
  const categoryResult = await fetch(sanityQueryURL(categoryQuery)).then(
    (res) => res.json()
  );
  const categories = categoryResult.result;

  // get posts
  const filteredQuery = encodeURIComponent(`*[_type == 'post']`);
  const filteredResult = await fetch(sanityQueryURL(filteredQuery)).then(
    (res) => res.json()
  );

  // filter posts by category ID
  const categoryIds = categories
    .filter((category) => category.title == filter)
    .map((category) => category._id);

  const filteredPosts = filteredResult.result.filter((post) =>
    categoryIds.includes(post.categories[0]._ref)
  );

  return {
    props: {
      categories,
      filteredPosts,
    },
  };
}

function FilterLink({ text, url }) {
  return (
    <div>
      <Link href={url}>
        <a className="m-7 rounded-md bg-black p-3 text-white hover:opacity-75 ">
          {text}
        </a>
      </Link>
    </div>
  );
}

export default function Home({ categories, filteredPosts }) {
  return (
    <div>
      <Filter categories={categories} />
      {/* Filtered Slugs have 'current' */}
      {filteredPosts.map((post) => (
        <CMSPost key={post.title} slug={post.slug.current} post={post} />
      ))}
      <div className="container mx-auto flex justify-center "></div>
    </div>
  );
}
