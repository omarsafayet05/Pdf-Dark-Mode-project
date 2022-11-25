import React, { useState } from "react";
import "./PDFfiles.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <h1 className="header">Dark Mode is ON</h1>
      <div className="container">
        <div className={`light-icon ${isDark && "dark-color"}`}>&#9788;</div>
        <label className="toggle">
          <input
            type={"checkbox"}
            value={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          <span className="slider" />
        </label>

        <div className={`dark-icon ${!isDark && "light-color"}`}>&#9789;</div>
      </div>
      <img
        src={isDark ? "/images/DarkMode.jpg" : "/images/LightMode.jpg"}
        alt=""
        srcset=""
        className="image"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure nisi non
        optio autem repudiandae, animi nemo in voluptate deleniti aut eaque
        officiis minima magni sint nam quas aliquam a reiciendis labore
        repellendus at pariatur vel! Facere a doloribus suscipit nemo, nulla
        incidunt aut voluptatem aspernatur, repellendus dolore repellat placeat
        voluptate recusandae magnam eaque. Ipsam consectetur impedit numquam
        harum voluptatibus aliquam dicta similique necessitatibus doloribus ex.
        Reprehenderit animi rerum ducimus, praesentium, odio dignissimos nostrum
        excepturi cupiditate soluta cumque ut. Accusamus laborum, quas non natus
        asperiores consequatur ratione eveniet suscipit nam incidunt sit in
        dignissimos laboriosam optio harum maiores expedita? Eveniet asperiores
        deleniti, voluptatem dignissimos laboriosam maxime accusamus vitae vel
        doloribus excepturi, minus autem dolores qui adipisci, magnam quod eum
        quia repellendus!
      </p>
    </div>
  );
};

export default DarkMode;
