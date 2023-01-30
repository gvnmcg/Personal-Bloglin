import Header from "./Header";
import Sidebar from "./Sidebar"
import style from "../styles/Layout.module.css"

export default function Layout({ children }) {

  return (
    // Background
    <div className={style.container}>
      <Header />
      <div className={style.main}>
        <Sidebar />
        <div className={style.content}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
