import { useState, useLayoutEffect, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    size >= 768 ? setMenuMobile(true) : setMenuMobile(false);
  }, [size]);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/">
          <img src="./images/icons/logo-marvel.svg" alt="logo Marvel" />
        </Link>

        <div className={styles.menuIcon}>
          {menuMobile ? (
            <AiOutlineClose
              onClick={() => setMenuMobile(false)}
              color="#fff"
              size={50}
            />
          ) : (
            <FiMenu
              onClick={() => setMenuMobile(true)}
              color="#fff"
              size={50}
            />
          )}
        </div>

        <div
          className={`${styles.menuLinks} ${
            menuMobile ? styles.menuActive : ""
          }`}
        >
          <Link href="#">
            <a>Filmes</a>
          </Link>

          <Link href="#">
            <a>Quadrinhos</a>
          </Link>

          <Link href="#">
            <a>Programas de TV</a>
          </Link>

          <Link href="#">
            <a>Jogos</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
