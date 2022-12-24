import React from 'react';
import Link from 'next/link';

export default function Sidebar(){
    return (
    <aside className='bg-evening-clouds flex-col '>
        <Link href='/'>
            <a>🏡</a>
        </Link>
        <Link href='/'>
            <a>Code</a>
        </Link>
        <Link href='/'>
            <a>Tools</a>
        </Link>
    </aside>
    )

}