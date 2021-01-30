import ActiveLink from "../activeLink/activeLink";
import styles from "../../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <ActiveLink href="/" activeClassName={styles.active_link}>
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about" activeClassName={styles.active_link}>
            <a>About</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
