import Link from "next/link";
import Image from "next/image";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <input
        type="checkbox"
        className={navStyles.navcheck}
        onChange={(e) => {
          console.log("CHanged");
        }}
      />
      <div className={navStyles.navheader}>
        <div className={navStyles.navtitle}>Xerox</div>
      </div>
      <div className={navStyles.navbtn}>
        <label htmlFor="navcheck">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className={navStyles.navlinks}>
        <a href="/insert">Insert</a>

        <Link href="/icrement">
          <a> Data </a>
        </Link>

        <a href="/getDatata">Table</a>
        <a href="/getData">update</a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
          User
        </a>
      </div>
    </div>
  );
};
export default Nav;
