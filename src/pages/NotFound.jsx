import React from "react";

export default function Notfound() {
  return (
    <>
      <div>404 Page</div>
      <div className="p-10 text-green">Try again</div>
      <div className="flex ">
        <div className="bg-red h-40 w-70">Not</div>
        <div className="bg-orange h-40 w-70">Found</div>
      </div>
    </>
  );
}
