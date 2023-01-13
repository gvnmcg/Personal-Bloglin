import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CMSPost({ slug, title }){
  

    return (
        <div className='bg-white  m-7 rounded-xl shadow-sm hover:shadow-lg overflow-hidden'>
          <Link  href={`/cms-post/${slug}`}>
            <a className='flex flex-row '>
              {/* <Image
                width={300}
                height={200}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              /> */}
              <div >
                <h1 className='m-4 font-bold'>{title}</h1>
                {/* <h2 className='m-4'>{description}</h2> */}
              </div>
            </a>
          </Link>
        </div>
    )

}