import React from "react";
import Link from "next/link";

import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header} role="banner">
      <h1 className={styles.heading}>
        <Link href="/">Movie Journal</Link>
      </h1>
    </header>
  );
};

export default Header;
