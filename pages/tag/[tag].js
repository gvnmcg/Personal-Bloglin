import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Post from "../../components/Post";

export async function getStaticPaths() {
  return {
    paths: [
      "/tag/books",
      "/tag/code",
      "/tag/games",
      "/tag/music",
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { tag } }) {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  let filterPosts = posts.filter((post) => post.frontmatter.tags.includes(tag));

  return {
    props: {
      filterPosts,
      tag
    },
  };
}

export default function TaggedPosts({ filterPosts,tag }) {
  // console.log(posts);

  return (
    <div className="p-4 md:p-0">
      <h1 className="bg-black text-white hover:opacity-75 m-7 rounded-md text-center">{tag}</h1>
      {filterPosts.map(({ slug, frontmatter }, ix) => (
        <div key={frontmatter.title}>
          <Post slug={slug} frontmatter={frontmatter} />
        </div>
      ))}
    </div>
  );
}
