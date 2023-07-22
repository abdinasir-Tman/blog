import { Link } from "react-router-dom";
import style from "./footer.module.scss";
import xog from "./links.json";
import LinkLists from "./LinkLists";

const Footer = () => {
  return (
    <>
      <div className={style.grid_list}>
        {xog.map((link) => (
          <LinkLists key={link.id} link={link} />
        ))}
      </div>

      <div className={style.footer}>
        <p>&copy; Sharafdiin 2019 - {new Date().getFullYear()}</p>
        <ul>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/downloads">Downloads</Link>
          </li>
          <li>
            <Link to="/opensource">Open Source</Link>
          </li>
          <li>
            <Link to="/termsandconditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
