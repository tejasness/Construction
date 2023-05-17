import React from "react";

function HeroSection() {
  return (
    <>
      <div className="relative">
        <img className="w-screen" src="bgimage.jpg" alt="" />
      </div>
      <div className="absolute top-0">
        <div className="flex flex-1 bg-[#5797a0] max-w-fit ml-[1100px] my-12 px-3 py-2 rounded-full">
          <div className="">
            <img src="/heroSection/profileicon.png" alt="" />
          </div>
          <div className="px-1 text-white -my-0.5">
          LOG IN
          </div>
        </div>
        <h1 className="text-white ml-[400px] my-10 text-2xl font-bold">Search Engines Of Construction Industry</h1>
        <div className="flex flex-1 ml-[370px] space-x-72 bg-white max-w-fit rounded-full cursor-text">
          <div className="text-[#989898] py-4 pl-10">
            Search Anything Anywhere
          </div>
          <div className="cursor-pointer">
            <img className="bg-[#5797a0] p-2.5 m-1 rounded-full" src="/heroSection/searchicon.png" alt="" />
          </div>
        </div>
        <div className="flex flex-1 my-6 ml-[350px] text-white">
          <div>
            Search By:
          </div>
          <div>
            <img className="pl-6 pr-1 py-1" src="heroSection/ontick.png" alt="" />
          </div>
          <div>
          Company Name
          </div>
          <div>
            <img className="pl-6 pr-1 py-1" src="heroSection/offtick.png" alt="" />
          </div>
          <div>
          Product/Services Name
          </div>
          <div>
            <img className="pl-6 pr-1 py-1" src="heroSection/offtick.png" alt="" />
          </div>
          <div>
          All Profile
          </div>
        </div>
        <div className="flex flex-1 text-white my-24 space-x-16 ml-[200px]">
          <div>
            <img className="mx-auto" src="/heroSection/real.png" alt="" />
            <h4 className="py-4">Real ESTATE</h4>
          </div>
          <div>
            <img className="mx-auto" src="/heroSection/infra.png" alt="" />
            <h4 className="py-4">INFRA AND ROADS</h4>
          </div>
          <div>
            <img className="mx-auto mt-5" src="/heroSection/transporters.png" alt="" />
            <h4 className="py-4">Transporters</h4>
          </div>
          <div>
            <img className="mx-auto" src="/heroSection/suppliers.png" alt="" />
            <h4 className="py-4">SUPPLIERS</h4>
          </div>
          <div>
            <img className="mx-auto" src="/heroSection/consultants.png" alt="" />
            <h4 className="py-4">CONSULTANTS</h4>
          </div>
          <div>
            <img className="mx-auto" src="/heroSection/industry.png" alt="" />
            <h4 className="py-4">INDUSTRY</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
