//Верхний логотип
import React from "react";

const LogoTop: React.FC = () => {
  return (
    <div className="logo-content">
      <a
        href="https://bi.group/"
        className="logo-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/bi-logo.svg" alt="Логотип" className="logo-image" />
      </a>
    </div>
  );
};

export default LogoTop;
