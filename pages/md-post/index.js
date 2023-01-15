import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Post from "../../components/Post";

export async function getStaticProps() {
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

  return {
    props: {
      posts,
    },
  };
}

export default function TaggedPosts({ posts }) {
  return (
    <div className="flex flex-col mx-auto">
      <Nav />
      <div className="p-4 md:p-0">
        {posts.map(({ slug, frontmatter }, ix) => (
          <div key={frontmatter.title}>
            <Post slug={slug} frontmatter={frontmatter} />
          </div>
        ))}
      </div>
    </div>
  );
}
