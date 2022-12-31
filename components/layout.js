import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <div className='flex'>
        <Sidebar/>
        <div>
          <Nav/>
          <main className='container mx-auto flex-1'>{children}</main>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
