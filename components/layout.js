import Link from 'next/link';


export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className="bg-[url('../assets/evening-clouds.jpg')] py-10 mb-8">
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>Gavin McGuire</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-slate-600 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          gvnmcg517@gmail.com
        </div>
      </footer>
    </div>
  );
}
