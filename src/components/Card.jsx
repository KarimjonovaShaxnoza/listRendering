import React from "react";

const Card = ({ img, name, title }) => {
  return (
    <>
      <div className=" flex items-center w-[636px] h-[151px] bg-[#F6F6F6] mt-10 rounded-3xl shadow-xl shadow-black/20 ml-10">
        <img
          className="flex items-center justify-center w-35 h-35 bg-[#FFEFD5] rounded-full ml-8"
          src={img}
          alt=""
        />
        <div className="ml-3">
          <h2 className="font-bold text-3xl">{name}</h2>
          <p className="text-2xl text-gray-600">{title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
