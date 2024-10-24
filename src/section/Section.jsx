import React from "react";
import imgFour from "../img/time.png";
import imgFive from "../img/five.png";
import imgSix from "../img/kingsman.png";
import imgImp from "../img/ROLEX.WWW.avif";
import imgSeven from "../img/daytona.avif";
import imgSub from '../img/Submariner.avif'
import imgDate from '../img/Date.avif'
import imgDay from '../img/Day.avif'
import imgYach from '../img/Yach.avif'
import imgOys from '../img/Oys.avif'
import imgSea from '../img/Sea.avif'
import imgEx from '../img/Explorer.avif'
import imgMil from '../img/Mil.avif'



function Section() {
  return (
    <>
      <div className="float-right text-center text-white relative">
        <img
          src={imgFive}
          className="items-center relative"
          width={770}
          height={200}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center mt-48">
          <h1 className="text-4xl">НОВАЯ КОЛЛЕКЦИЯ</h1>
          <h3 className="mt-8 p-2 border border-white bg-gray-2500 hover:bg-gray-1100 transition-transform transform hover:scale-110">
            КАТАЛОГ
          </h3>
        </div>
      </div>
      <div className="bg-black h-screen">
        <div className="flex gap-10 flex-col">
          <h2 className="text-3xl ml-64 text-white mt-10">Season 2022/23</h2>
          <div className="flex gap-6">
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900 ">
              <img
                src={imgImp}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">ROLEX GMT-Master</h3>
              <h4 className="mb-14 text-white ">889 525 руб. </h4>
            </div>
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
              <img
                src={imgFour}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">Louis XVI ATHOS</h3>
              <h4 className="mb-14 text-white">165 000 руб. </h4>
            </div>
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
              <img
                src={imgSeven}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">ROLEX Daytona</h3>
              <h4 className="mb-14 text-white">1 366 016 руб. </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="top-48 bg-black flex">
        <img src={imgSix} width={720} height={600} alt="" />

        <div className="text-white mt-24 text-center ml-32 mb-8 ">
          <h1 className="p-16 text-4xl">КОЛЛЕКЦИЯ 2023</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
            ornare ut <br /> mattis habitant dui arcu. Sagittis amet nunc ut
            neque quis nibh arcu. Vivamus <br /> vestibulum nisi et venenatis
            sed scelerisque magna consectetur. Amet <br /> convallis quis
            gravida facilisis vulputate. Faucibus facilisi habitasse ipsum{" "}
            <br /> interdum dictum aliquet. Velit quis ullamcorper pulvinar
            nulla malesuada <br />
            integer. Aenean praesent viverra nulla nullam natoque volutpat
            curabitur <br /> auctor. Viverra viverra ullamcorper scelerisque
            risus dignissim egestas. Id <br /> aliquam a aliquam egestas leo
            orci pharetra sed diam.{" "}
          </p>
          <h2 className="text-2xl mt-12 p-3 border border-white bg-gray-2500 hover:bg-gray-600">
            ПОСМОТРЕТЬ КОЛЛЕКЦИЮ
          </h2>
        </div>
      </div>
      <div className="bg-black h-full flex gap-10 flex-col">
        <h1 className="text-4xl text-center mt-24">НОВЫЕ ПОСТУПЛЕНИЯ</h1>
        <div className="flex gap-6 justify-self-center flex-wrap ml-64 mr-48 pt-6 h-1/2">
          <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900 ">
            <img
              src={imgMil}
              alt=""
              className="w-full h-full transform hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mt-8 text-white">ROLEX Milgauss</h3>
            <h4 className="mb-14 text-white ">717 093 руб. </h4>
          </div>
          <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
            <img
              src={imgEx}
              alt=""
              className="w-full h-full transform hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mt-8 text-white">ROLEX Explorer</h3>
            <h4 className="mb-14 text-white">577 686 руб. </h4>
          </div>
          <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
            <img
              src={imgSea}
              alt=""
              className="w-full h-full transform hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mt-8 text-white">ROLEX Sea-Dweller</h3>
            <h4 className="mb-14 text-white">717 498 руб. </h4>
          </div>
          <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
            <img
              src={imgOys}
              alt=""
              className="w-full h-full transform hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mt-8 text-white">ROLEX Oyster Perpetual</h3>
            <h4 className="mb-14 text-white">119 853 руб. </h4>
          </div>
        </div>
        <div className="h-96">
          <div className="flex gap-6 col mt-4 justify-self-center flex-wrap ml-64 mr-48 pt-12">
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900 ">
              <img
                src={imgYach}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">ROLEX Yacht-Master</h3>
              <h4 className="mb-14 text-white ">1 509 765 руб. </h4>
            </div>
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
              <img
                src={imgDay}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">ROLEX Day-Date</h3>
              <h4 className="mb-14 text-white">666 031 руб. </h4>
            </div>
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
              <img
                src={imgDate}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">ROLEX Datejust</h3>
              <h4 className="mb-14 text-white">199 789 руб. </h4>
            </div>
            <div className="box-content h-52 w-48 p-4 border-4-black bg-neutral-900">
              <img
                src={imgSub}
                alt=""
                className="w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-8 text-white">ROLEX Submariner</h3>
              <h4 className="mb-14 text-white">691 967 руб. </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
