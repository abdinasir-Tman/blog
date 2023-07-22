import { useEffect, useRef, useState } from "react";
import style from "./header.module.scss";
import { AiOutlineSearch, AiFillCaretUp } from "react-icons/ai";
const Header = () => {
  const [theme, setTheme] = useState(true);
  const [search, setSearch] = useState(false);
  const [menue, setMenue] = useState(false);
  const searchRef = useRef();
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--backgroundColor", `${theme ? "white" : "black"}`);
    root.style.setProperty("--color", `${theme ? "black" : "white"}`);
  }, [theme]);
  useEffect(() => {
    let searched = document.querySelector("input");
    searched.style.width = search ? "fit-content" : "0px";
    searched.style.border = search ? "1px solid black" : "none";
    searchRef.current.focus();
  }, [search]);
  useEffect(() => {
    let men = document.querySelector("ul[hiddenclass='sub_menue']");
    let downIcon = document.querySelector("#rotateIcon");
    downIcon.style.transform = menue ? "rotateX(145deg)" : "rotateX(0deg)";
    men.style.visibility = menue ? "visible" : "hidden";
  }, [menue]);
  return (
    <div className={style.header}>
      <a href="#">
        <img
          src="https://www.sharafdin.com/wp-content/uploads/2022/03/cropped-20210603_21054356.png"
          alt=""
        />
      </a>
      <ul>
        <li>
          <a href="#">Ras App</a>
        </li>
        <li className={style.menue}>
          <a href="#home" onClick={() => setMenue(!menue)}>
            Local Sharafdin <AiFillCaretUp id="rotateIcon" />
          </a>
          <ul
            className={style.hidden}
            hiddenclass="sub_menue"
            onClick={() => setMenue(!menue)}
          >
            <li>
              <a href="#rasApp">Study At Sharafdin</a>
            </li>
            <li>
              <a href="#rasApp">SomGraphy</a>
            </li>
            <li>
              <a href="#rasApp">Live Stock</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Downloads</a>
        </li>
        <li className={style.search}>
          <input
            ref={searchRef}
            type="text"
            placeholder="search.."
            style={{
              width: "0px",

              border: "none",
              outline: "none",
              transition: "1s",
            }}
          />
          <span onClick={() => setSearch(!search)}>
            <AiOutlineSearch className={style.icon} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
