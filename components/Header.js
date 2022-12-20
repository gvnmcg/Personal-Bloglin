import React from 'react';
import Link from 'next/link';

export default function Header(){
    return (
    <header className="bg-blue-clouds py-10">
        <div className='flex justify-center container mx-auto '>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span class="mx-7">Gavin McGuire</span>
        </div>
      </header>
    )

}