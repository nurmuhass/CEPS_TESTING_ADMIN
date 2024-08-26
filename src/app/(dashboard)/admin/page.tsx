"use client";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from 'react';
import HomePageCases from "@/components/HomePageTable";


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const images = [
  "/img-card1.png",
  "/img-card2.png",
  "/img-card3.png",
  "/img-card4.png",
  "/maleFemale.png",
  "/img-card2.png",
  "/img-card3.png",
  "/img-card4.png",
];

const AdminPage = () => {
  const windowWidth = useWindowWidth();

  let slidesToShow;
  if (windowWidth >= 1590) { // Large devices
    slidesToShow = 4;
  } else if (windowWidth >= 768) { // Medium devices
    slidesToShow = 3;
  } else if (windowWidth >= 640) { // Small devices
    slidesToShow = 2;
  } else { // Extra-small devices
    slidesToShow = 1;
  }

  const slideProperties = {
    duration: 3000,
    infinite: true,
    indicators: true,
    slidesToShow, // Set slidesToShow dynamically
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 z-10">
        <ArrowLeftIcon className="h-8 w-8 font-normal text-black cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 z-10">
        <ArrowRightIcon className="h-8 w-8 font-normal text-black cursor-pointer" />
      </div>
    )
  };

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-full flex flex-col gap-8">
        {/* USER CARDS */}
        <div>
          <span className="text-4xl font-semibold">Executive View</span>
        </div>
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Total Cases" />
          <UserCard type="Active Cases" />
          <UserCard type="Pending Cases" />
          <UserCard type="Completed Cases" />
        </div>

        {/* Reports Feeds Slider */}
        <div className="bg-white p-4 w-full h-350">
          <div className="mb-6">
            <span className="text-3xl font-semibold">Reports Feeds</span>
          </div>
          <div className="bg-white p-2 w-full ">
            <div className="relative">
              <Slide {...slideProperties}>
                {images.map((each, index) => (
                  <div key={index} className="flex-none w-auto h-80 ml-2">
                    <img className="w-full h-full rounded-lg " src={each} />
                    {/* <Image src="/img-card1.png" alt=""  width={250} height={250}/> */}
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>
  {/* Home Cases*/}
  <div className="w-full h-auto">

        <HomePageCases/>

    </div>

        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
