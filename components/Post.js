import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Post({ slug, frontmatter }){
    return (
        <div class='border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden'>
          <Link  href={`/post/${slug}`}>
            <a class='flex flex-row'>
              <Image
                width={300}
                height={200}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <div>
                <h1 class='m-4 font-bold'>{frontmatter.title}</h1>
                <h2 class='m-4'>{frontmatter.metaDesc}</h2>
              </div>
            </a>
          </Link>
        </div>
    )

}