import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Filter from "./Filters";

export default function Layout({ children }) {

  return (
    // Background
    <div className="flex flex-col bg-gradient-to-b from-white to-black dark:from-black dark:to-white ">
      <Header />
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <div className="mx-auto mt-7 flex flex-col">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
