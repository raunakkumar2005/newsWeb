import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";
// import { PDFViewer } from "pdfjs-dist/legacy/build/pdf";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  // Function to open PDF in a new tab
  const openPdfInNewTab = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Blog</Link>
              </li>
              <li className='dropdown'>
                <span>Magazine</span>
                <ul className='dropdown-menu'>
                  <li onClick={() => openPdfInNewTab("/pdf/mag1.pdf")}>
                    <span>2018-19</span>
                  </li>
                  <li onClick={() => openPdfInNewTab("/pdf/mag1.pdf")}>
                    <span>2019-20</span>
                  </li>
                  <li onClick={() => openPdfInNewTab("/pdf/mag1.pdf")}>
                    <span>2020-21</span>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
