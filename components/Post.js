import React from 'react';
import Link from 'next/link';

export default function Post({ slug, frontmatter }){
    return (
        <div className='flex row justify-start border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden'>
          <Link href={`/post/${slug}`}>
            <a>
              <img
                className=" md:w-48  md:h-auto "
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='m-4 font-bold'>{frontmatter.title}</h1>
              <h2 className='m-4'>{frontmatter.metaDesc}</h2>
            </a>
          </Link>
        </div>
    )

}