import React from "react";
import vecBas from "../assets/vecBas.png";
import vecReno from "../assets/vecReno.png";
import vecMat from "../assets/vecMat.png";
import vecDes from "../assets/vecDes.png";
import Womansmile from "../assets/womansmile.png";
import Accordian from "../components/Accordian";

const FAQs = () => {
  return (
    <div className=" w-full h-fit m-auto bg-gray-100  ">
      <div className=" pt-40 max-w-6xl mx-auto  p-3">
        {/*  */}
        <div className="mb-4 text-sm text-gray-600">
          <a href="/" className="text-blue-500 text-base hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <span className="font-bold text-base font-display text-black">
            FAQs
          </span>
        </div>
        {/*  */}
        <div className="mt-8 ">
          <h1 className=" text-3xl mb-5 sm:text-5xl font-bold font-display">
            Curious Minds Wants to Know
          </h1>
          {/*  */}
          <div className=" grid grid-cols-2 justify-evenly max-w-[600px] gap-5 mb-8 ">
            <button className=" p-2 bg-blue-100 hover:bg-blue-200 rounded-full flex justify-center items-start gap-2  ">
              <span>
                {" "}
                <img src={vecReno} alt="" className=" h-6 w-6 " />
              </span>{" "}
              <span className=" text-sm sm:text-base">
                {" "}
                Basement Renovation
              </span>
            </button>
            <button className=" p-2 bg-blue-100 hover:bg-blue-200 rounded-full flex justify-center items-start gap-2  ">
              <span>
                {" "}
                <img src={vecBas} alt="" className="  h-6 w-6 " />
              </span>
              <span className=" text-sm sm:text-base"> Legal Basement</span>
            </button>
            <button className=" p-2 bg-blue-100 hover:bg-blue-200 rounded-full flex justify-center  items-start gap-2  ">
              <span>
                {" "}
                <img src={vecDes} alt="" className=" h-6 w-6" />
              </span>{" "}
              <span className=" text-sm sm:text-base">
                {" "}
                Design & Customization
              </span>
            </button>
            <button className=" p-2 bg-blue-100 hover:bg-blue-200 rounded-full flex justify-center  items-start gap-2   ">
              <span>
                {" "}
                <img src={vecMat} alt="" className=" h-6 w-6" />
              </span>{" "}
              <span className=" text-sm sm:text-base">
                {" "}
                Construction & Materials
              </span>
            </button>
          </div>
          <div className=" flex flex-col sm:flex-row sm:flex  justify-between items-center">
            {/* accordian */}
            <div className=" w-[100%] sm:w-[60%] ">
              <Accordian
                title="What is included in a basement renovation?"
                answer="I like to use iOS products"
              />
              <Accordian
                title="How long does a basement renovation take?"
                answer="I like to use iOS products"
              />
              <Accordian
                title="Do I need a permit for a basement renovation?"
                answer="I like to use iOS products"
              />
              <Accordian
                title="Can I make my basement a legal apartment?"
                answer="I like to use iOS products"
              />
              <Accordian
                title="Can I still use my basement during renovation?"
                answer="I like to use iOS products"
              />
            </div>
            <div className="  w-[100%] sm:w-[30%] h-[490px] ">
              <img
                src={Womansmile}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
