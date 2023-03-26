import React, { useState, useEffect } from "react";
import { ReactComponent as AppLogo } from "assets/icons/app_logo.svg";
import { ReactComponent as IconRecord } from "assets/icons/icon_record.svg";
import { ReactComponent as IconChallenge } from "assets/icons/icon_challenge.svg";
import { ReactComponent as IconNotice } from "assets/icons/icon_notice.svg";
import { ReactComponent as IconMenu } from "assets/icons/icon_menu.svg";
import { Link } from "react-router-dom";
import ExtendMenu from "./ExtendMenu";
export default function Navbar() {
  const navItems = [
    {
      text: "自分の記録",
      link: "/my_record",
      icon: <IconRecord />,
    },
    {
      text: "チャレンジ",
      link: "/challenge",
      icon: <IconChallenge />,
    },
    {
      text: "お知らせ",
      link: "/",
      icon: <IconNotice />,
    },
  ];
  const [extendHidden, setExtendHidden] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      window.innerWidth >= 600 && setOpenMobileNav(false);
    });
  }, []);
  if (windowWidth > 600)
    return (
      <div className="z-10 flex navbar">
        <div className="flex items-center justify-center w-30">
          <Link to="/">
            <AppLogo />
          </Link>
        </div>
        <div className="flex items-center justify-center w-70">
          {navItems.map((item) => (
            <Link className="flex mx-[30px] hover:text-main" to={item.link}>
              {item.icon}&nbsp;
              {item.text}
            </Link>
          ))}
          <div className="ml-[50px] lg:mr-0 mr-[30px] ml:mr-[-100px]">
            <IconMenu
              className={`cursor-pointer ${extendHidden ? "" : "hidden"}`}
              onClick={() => setExtendHidden(!extendHidden)}
            />
            <ExtendMenu
              onClose={() => setExtendHidden(true)}
              hidden={extendHidden}
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="navbar flex flex-wrap justify-between items-center px-[10px] sm:px-[20px] z-10">
      <div>
        <Link to="/">
          <AppLogo />
        </Link>
      </div>
      <div>
        <IconMenu
          className="cursor-pointer"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        />
      </div>
      <div className={`w-full ${openMobileNav ? "block" : "hidden"}`}>
        {navItems.map((item: any, index: number) => (
          <Link
            className="block border-b border-solid border-[#777] text-right h-[45px] leading-[45px]"
            to={item.link}
            key={`nav-mobile-item-${index}`}
          >
            <div className="w-[35px] h-[30px] pt-[10px] inline-block">
              {item.icon}
            </div>
            &nbsp;
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
