import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="bg-blue-clouds bg-contain flex flex-col ">
      <Header />

      <div className="flex ">
        <Sidebar />
        <div className="flex flex-col mx-auto">
          <Nav />
          <main>{children}</main>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
