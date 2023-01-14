import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Filter from "./Filters";

export default function Layout({ children }) {
  return (
    // Background
    <div className="bg-blue-clouds bg-fixed bg-repeat-round bg-contain flex flex-col">
      {/* Header always at the top.*/}
      <Header />
      {/* Responsive: default mobile -> sm:desktop */}
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <div className="flex flex-col mx-auto">
          {/* Filters always on Top */}
          <Nav />
          <Filter />
          <main>{children}</main>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
