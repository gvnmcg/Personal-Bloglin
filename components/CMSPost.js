import React, { useEffect, useState } from 'react';
import  ImageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Image from 'next/image';

export default function CMSPost({ slug, post }){

  const [imageUrl, setImageUrl] = useState('')

  useEffect( () => {
    const urlBuilder = ImageUrlBuilder({
      projectId: '20qe52oi',
      dataset: 'production'
    })
    setImageUrl(urlBuilder.image(post.mainImage.asset._ref).toString())
  },[post])

    return (
      <div className=" light:bg-white m-7 overflow-hidden rounded-xl shadow-sm transition duration-500 hover:scale-110 hover:shadow-lg dark:bg-black dark:text-white">
        <Link href={`/cms-post/${slug}`}>
          <a className="flex flex-col sm:flex-row  ">
            <Image
              width={300}
              height={200}
              alt={post.slug}
              loader={() => imageUrl}
              src={"imageUrl"}
            />
            <div>
              <h1 className="m-4 font-bold">{post.title}</h1>
            </div>
          </a>
        </Link>
      </div>
    );

}