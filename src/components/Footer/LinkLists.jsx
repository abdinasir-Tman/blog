import { Link } from "react-router-dom";
import style from "./footer.module.scss";

const LinkLists = ({ link }) => {
  return (
    <div className={style.card}>
      <h3>{link.title}</h3>
      <ul>
        {link.links.map((l, i) => (
          <li>
            <Link to={"/" + l.split(" ").join("").toLowerCase()} key={i}>
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkLists;
