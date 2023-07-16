import React from "react";
import logo from './about-us.png'; // with import
export default function About() {
  return (
    <>
      <div className="flex align-center justify-between py-10px flex-col" >
        <h1 className="text-blue text-center" >About Us</h1>
        <div className="flex align-center justify-between">
          <div className="mx-20px">
            <img src={logo} alt="" className="w-500px"/>
          </div>
          <div className="w-100% px-20px">
            <p className="lh-24px text-justify">We are visionaries, we are developers, we are software enginners. We learn by doing and we are exploring the world of technology through frontend development, backend development, software enginnering and deVops. We contribute to orgaanisational progress via hard work, resistancy and dedication. We are Zreact!!!!</p>
            <button className="px-15 py-10px bg-blue text-white b-blue">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
