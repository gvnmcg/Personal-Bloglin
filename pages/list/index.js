import BlockContent from "@sanity/block-content-to-react";
import { sanityQueryURL } from '../../utils/utils';
import { useEffect } from "react";
import URLSearchParams from 'url-search-params'
import Image from "next/image";


export async function getStaticProps() {
  // const query = encodeURIComponent(`*[_type == 'list' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  // const query = encodeURIComponent(`*[_type == 'list']`);
  // const result = await fetch(sanityQueryURL(query)).then((res) => res.json());
  // const posts = [];
  // const posts = result.result;

  // const authRes = await fetch(`http://www.last.fm/api/auth/?api_key=${process.env.NEXT_PUBLIC_LAST_FM_API_KEY1}&token=${process.env.NEXT_PUBLIC_LAST_FM_API_token1}`)
  // const raw = await fetch(
  //   `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Animal%20Collective&api_key=937f22e3f3ab1c0f7ab0302aefd2ab75&format=json&token=BkmwUQtQGyC6wqnyuwOMIa6qwLwSBrt_`
  // ).then((content) => {
  //   console.log("content", content);
  //   // console.log("content",content.body)
  //   return content.json();
  // });
  // console.log("content",raw)

  // const fetchBody = new FormData()
  // fetchBody.append("method","artist.getinfo")
  // fetchBody.append("artist","Animal Collective")
  // fetchBody.append("api_key",process.env.NEXT_PUBLIC_LAST_FM_API_KEY1)
  // fetchBody.append("token",process.env.NEXT_PUBLIC_LAST_FM_API_token1)
  const fetchBody = {
    method: "album.getInfo",
    artist: "Animal Collective",
    album: "Merriweather Post Pavilion",
    api_key: process.env.NEXT_PUBLIC_LAST_FM_API_KEY1,
    token: process.env.NEXT_PUBLIC_LAST_FM_API_token1,
    format: 'json'
  };
  const posts = await fetch(`http://ws.audioscrobbler.com/2.0/?${new URLSearchParams(fetchBody).toString()}`)
  // const authRes = await fetch(`http://ws.audioscrobbler.com/2.0/`, {
  //   method: "POST",
  //   headers: {
  //     // 'User-Agent': '*',
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     // "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: new URLSearchParams(fetchBody).toString(),
  //   // body: JSON.stringify(fetchBody),
  //   // body: fetchBody,
  // })
  .then((content) => {
    return content.json();
  });

  console.log(posts);
  console.log(new URLSearchParams(fetchBody).toString());


  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
// export default function Home() {

// useEffect(()=> {
  
// })

  console.log(posts)
  return (
    <div className="prose mx-auto rounded-md bg-white p-7">
      <Image src={posts.album.image[2]["#text"]} alt="tht" width={400} height={600}/>
      {JSON.stringify(posts.album.image[2].text)}
    </div>
  );
}
