import React, { useEffect, useState } from 'react';
import  ImageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Image from 'next/image';

export default function CMSPost({ post }){

  const [imageUrl, setImageUrl] = useState('')

  useEffect( () => {
    const urlBuilder = ImageUrlBuilder({
      projectId: '20qe52oi',
      dataset: 'production'
    })
    setImageUrl(urlBuilder.image(post.mainImage.asset._ref).toString())
  })
  

    return (
        <div className='bg-white  m-7 rounded-xl shadow-sm hover:shadow-lg overflow-hidden'>
          <Link  href={`/cms-post/${post.slug}`}>
            <a className='flex flex-row '>
              <Image
                width={300}
                height={200}
                alt={post.slug}
                loader={() => imageUrl}
                src={"imageUrl"}
              />
              <div >
                <h1 className='m-4 font-bold'>{post.title}</h1>
              </div>
            </a>
          </Link>
        </div>
    )

}