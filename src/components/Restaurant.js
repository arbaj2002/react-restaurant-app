import React, { useState } from "react";
import Menu from "./MenuApi.js";
import Navbar from "./Navbar.js";
import Menucard from "./Menucard.js";
import "./style.css"

const uniqueList = [
  ...new Set(
    Menu.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curEle) => {
      return (curEle.category === category);
    });
    setMenuData(updatedList);
  };

  return (
    <div>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </div>
  );
};

export default Restaurant;
