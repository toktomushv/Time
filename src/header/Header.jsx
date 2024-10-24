import React from "react";
import imgOne from "../img/poisk.png";

function Header() {
  return (
    <>
      <div className=" h-32 flex justify-between items-center  bg-black ">
        <div className="w-screen mx-24 h-12 flex items-center justify-between text-white">
          <h1 className="text-4xl">PORTEN</h1>
          <ul className="flex gap-12 ">
          <div className="hover:bg-gray-500"><li>ГЛАВНАЯ</li></div>  
            <li className="hover:bg-gray-500">ТОВАРЫ</li>
            <li className="hover:bg-gray-500">РЕГИСТРАЦИЯ</li>
            <img className="hover:bg-gray-500" src={imgOne} alt="" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
