import React from "react";
import styles from "./navbar.module.css";
import wordmarklight from "@/public/wordmarklight.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">
            <img src={wordmarklight.src} className={styles.logo} />
          </a>
        </li>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Method</a>
        </li>
        <li>
          <a href="/">Customers</a>
        </li>
        <li>
          <a href="/">Changelog</a>
        </li>
        <li>
          <a href="/">Integrations</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Company</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Log in</a>
        </li>
        <li>
          <a href="/" type="button" className={styles.button}>
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}
