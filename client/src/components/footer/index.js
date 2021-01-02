import React from "react";
import Style from "./Footer.module.css";

const Footer = () => (
  <footer className={Style.footer}>
    <ul>
      <li>
        <a
          href="https://t.me/astrov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </li>
      <li>
        <a
          href="https://vk.com/astrov"
          target="_blank"
          rel="noopener noreferrer"
        >
          VK
        </a>
      </li>
      
    </ul>
    <p>Created by Astrov</p>
  </footer>
);

export default Footer;
