import React from "react";
import error from "../assets/img/error.png";
import { Link, useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();

  // const redirect = () => {
  //   navigate("/");
  // };
  return (
    <>
      <div className="flex align-center justify-between py-10px flex-col">
        <div className="flex align-center justify-between">
          <div className="mx-20px">
            <img src={error} alt="" className="w-500px" />
          </div>
          <div className="w-100% px-20px align-center flex flex-col my-40px">
            <h1 className="text-yellow text-center text-80px">ERROR 404</h1>
            <p className="lh-30px m-auto text-24px text-center py-20px">
              Unforunatly you ran into a problem, please click the redirect button to go back to the home page
            </p>
            <Link
              to="/"
              className="px-15 rounded-lg py-15px bg-yellow text-white b-solid b-gray-500 b-t-yellow b-l-yellow b-2px text-18px m-auto cursor-pointer hover:bg-black transition-all duration-1000"
            >
              Redirect Back
            </Link>

            <button onClick={() => navigate("/")} className="px-15 rounded-lg py-15px bg-yellow text-white b-yellow w-250px text-18px m-auto pointer">
              Redirect Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
