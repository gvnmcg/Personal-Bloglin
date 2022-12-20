import React from 'react';
import Link from 'next/link';

export default function Header(){
    return (
    <header className="bg-blue-clouds py-10 mb-8">
        <div className='container mx-auto flex jutsify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>Gavin McGuire</span>{' '}
        </div>
      </header>
    )

}