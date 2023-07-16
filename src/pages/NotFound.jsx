import React from "react";
import error from './error.png';

export default function Notfound() {
  return (
    <>
     <div className="flex align-center justify-between py-10px flex-col" >
        <div className="flex align-center justify-between">
          <div className="mx-20px">
            <img src={error} alt="" className="w-500px"/>
          </div>
          <div className="w-100% px-20px flex flex-col my-150px" >
            <h1 className="text-blue text-center" >ERROR 404</h1>
            <p className="lh-24px text-justify">Unforunatly you ran into a problem, please click on the button below to redirect back to the previous page</p>
            <button className="px-15 py-10px bg-blue text-white b-blue">Redirect Back</button>
          </div>
        </div>
      </div>
    </>
  );
}
