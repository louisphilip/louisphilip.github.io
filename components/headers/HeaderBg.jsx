"use client";
import React, { useState, useEffect } from "react";
import Menu from "../menus/Menu";
import { menuItems } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export default function HeaderBg() {
  const [darkMode, setDarkMode] = useState(false);

  const addDarkbg = () => {
    if (
      document.body.style.backgroundImage !=
      "url(/assets/img/bg/bg-dark.svg"
    ) {
      document.body.style.backgroundImage =
        "url(/assets/img/bg/bg-dark.svg";
      setDarkMode(true);
    }
  };

  const addlightBg = () => {
    if (
      document.body.style.backgroundImage != "url(/assets/img/bg/bg-light.svg)"
    ) {
      document.body.style.backgroundImage = "url(/assets/img/bg/bg-light.svg)";
      setDarkMode(false);
    }
  };
  const handleDarkmode = () => {
    const currentState = localStorage?.getItem("idDarkMode");
    if (JSON.parse(currentState) == true) {
      localStorage.setItem("idDarkMode", false);
      document.body.classList.remove("dark-theme");
      addlightBg();
    } else {
      localStorage?.setItem("idDarkMode", true);
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const currentState = localStorage?.getItem("idDarkMode");

    if (JSON.parse(currentState) == true) {
      document.body.classList.add("dark-theme");
      addDarkbg();
    } else {
      document.body.classList.remove("dark-theme");

      addlightBg();
    }
  }, []);
  return (
    <div className="bostami-header-area mb-30 z-index-5">
      <div className="container">
        <div className="bostami-header-wrap">
          <div className="row">
            <div className="col-6">
              <div className="bostami-header-logo">
                <Link className="site-logo" href="/">
                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/logo/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-6">
              <div className="bostami-header-menu-btn text-right mb-0">
                <div className="dark-btn mode-btn" onClick={handleDarkmode}>
                  {darkMode ? (
                    <i className="sunicon fa-light fa-sun-bright"></i>
                  ) : (
                    <i className="moonicon fa-solid fa-moon"></i>
                  )}
                </div>
                <div
                  className={`menu-btn toggle_menu d-lg-none ${
                    menuOpen && "active"
                  } `}
                  onClick={() => setMenuOpen((pre) => !pre)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu_3 ${menuOpen && "active"} `}>
            <Menu setMenuOpen={setMenuOpen} data={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
