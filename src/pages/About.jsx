import React from "react";
import logo from "../assets/img/about-us.png"; // with import
export default function About() {
  return (
    <>
      <div className="flex align-center justify-between px-10px flex-col">
        <h1 className="text-blue text-center text-50px">About Us</h1>
        <div className="flex align-center justify-between">
          <div className="mx-20px w-40%">
            <img src={logo} alt="" className="w-100%" />
          </div>
          <div className="w-100% px-40px w-60%">
            <p className="lh-32px text-justify text-20px">
              We are visionaries, we are developers, we are software enginners. We learn by doing and we are exploring the world of technology through frontend
              development, backend development, software enginnering and deVops. We contribute positively to organisational progress via hard work, resilient
              and dedication. We are Zreact!!!!
            </p>
            <button className="px-15 py-15px bg-blue text-white b-blue my-10px text-16px rounded-lg ">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
