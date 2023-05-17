import React from "react";

function Feedback() {
  return (
    <div className="font-bold">
      <h1 className="mx-auto w-max py-16 text-2xl">Customer Feedback</h1>
      <div className="grid grid-cols-11">
        <div className="w-max mx-auto h-auto my-auto">
          <img className="px-3 py-2 rounded-full shadow-xl" src="feedback/leftarrow.png" alt="leftarrow" />
        </div>
        <div className="col-span-3 bg-[#daf0ed] mr-6 rounded-2xl border border-[#89aacb]">
            <h2 className="px-4 pt-28">“Amazing product and company”</h2>
            <p className="px-6">Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a 
            Donec quam felis, ultricies nec, pellentesque.
            </p>
        </div>
        <div className="col-span-3 bg-[#daf0ed] mx-6 rounded-2xl border border-[#89aacb]">
            <img className="rounded-full p-3" src="feedback/girl.png" alt="girl" />
            <h2 className="px-4">“Amazing product and company”</h2>
            <p className="px-6">Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a 
            Donec quam felis, ultricies nec, pellentesque.
            </p>
            <h4 className="mr-20 text-right">-Rahul</h4>
            <h4 className="mr-5 pb-5 text-right">Software Engineer</h4>
        </div>
        <div className="col-span-3 bg-[#daf0ed] ml-6 rounded-2xl border border-[#89aacb]">
            <img className="rounded-full p-3" src="feedback/boy.png" alt="boy" />
            <h2 className="px-4">“Amazing product and company”</h2>
            <p className="px-6">Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a 
            Donec quam felis, ultricies nec, pellentesque.
            </p>
            <h4 className="mr-20 text-right">-Rahul</h4>
            <h4 className="mr-5 text-right">Software Engineer</h4>
        </div>
        <div className="w-max mx-auto h-max my-auto">
          <img className="px-3 py-2 rounded-full shadow-xl" src="feedback/rightarrow.png" alt="rightarrow" />
        </div>
      </div>
      <img className="w-max mx-auto py-10" src="feedback/dots.png" alt="" />
    </div>
  );
}

export default Feedback;
