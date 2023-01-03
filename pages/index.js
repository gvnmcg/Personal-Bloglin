import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Post from '../components/Post';
import Nav from '../components/Nav';

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
  let { slug, frontmatter } = posts[0]
  console.log(slug)
  return (
    <div className='p-4 m-3 md:p-0 mx-auto'>
      {posts.map(({ slug, frontmatter }) => (
        <div key={frontmatter.title} className='p-4 m-3 md:p-0'>
          <Post slug={slug} frontmatter={frontmatter} />
        </div>
      ))}
    </div>
  );
}
