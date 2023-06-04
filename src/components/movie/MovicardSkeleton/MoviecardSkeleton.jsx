import { LoadingSkeleton } from "../../commons/LoadingSkeleton";
import React from "react";

const MoviecardSkeleton = () => {
  return (
    <div className="movie-card rounded p-3 bg-slate-800 text-white flex flex-col h-full">
      <LoadingSkeleton
        with="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      />
      <h3 className=" text-xl font-bold mb-3 flex-[1]">
        <LoadingSkeleton with="100%" height="20px" />
      </h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>
          {" "}
          <LoadingSkeleton with="50px" height="10px" />
        </span>
        <span>
          {" "}
          <LoadingSkeleton with="30px" height="10px" />
        </span>
      </div>
      {/* <button onClick={()=>Link(`/movies/${id}`)} className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3 captipalize w-full mt-auto text-center" >
                watch now
            </button> */}
      <LoadingSkeleton with="100%" height="40px" />
    </div>
  );
};

export default MoviecardSkeleton;
