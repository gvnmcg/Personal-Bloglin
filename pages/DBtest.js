// import fs from "fs";
// import matter from "gray-matter";
// import Post from "../components/Post";

import { useEffect, useState } from "react";
import Image from "next/image";
// export async function getStaticProps() {
// //   const files = fs.readdirSync("posts");

//   let posts = [];

//   try {
//     const client = await clientPromise;
//     const db = client.db("Blog_Content");

//     posts = await db
//       .collection("Posts")
//       .toArray();

//   } catch (e) {
//     console.error(e);
//   }

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default function DBtest() {
  //   let { slug, frontmatter } = posts[0];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/dbtest")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="m-3 mx-auto p-4 md:p-0">
      <h3>DB TEST</h3>
      {posts?.map(({ title, content, image }, ix) => (
        <div key={ix} className="m-3 p-4 md:p-0">
          <img src={"https://unsplash.com/photos/IM8ZyYaSW6g"} alt="" className="w-full rounded-md" />
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="mb-4">{content}</p>
          <Image src={image} alt="" width={500} height={500} />
        </div>
      ))}
    </div>
  );
}
