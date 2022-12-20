import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Post from '../components/Post';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
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

export default function Home({ posts }) {
  return (
    <div className=' grid-cols-1  p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div key={frontmatter.title}>
          <Post slug={slug} frontmatter={frontmatter} />
        </div>
      ))}
    </div>
  );
}
