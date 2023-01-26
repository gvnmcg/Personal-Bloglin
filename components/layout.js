import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Filter from "./Filters";

export default function Layout({ children }) {

  return (
    // Background
    <div className="flex flex-col bg-slate-100 dark:bg-gray-800">
      <Header />
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <div className="mx-auto flex flex-col mt-7">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
