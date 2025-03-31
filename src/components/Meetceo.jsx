import React from "react";
import ceoimg from "../assets/ceoimg.png";

const Meetceo = () => {
  const ceocontent = [
    {
      id: 1,
      Image: ceoimg,

      Text: "Rasaki is the CEO of Elephant Company INC, a leading building renovation company. With over 20 years of experience in the construction industry, Rasaki has built a reputation for his expertise in transforming both residential and commercial properties. His hands-on approach and keen eye for detail have driven the company's success, ensuring projects are completed on time, within budget, and to the highest standards. Passionate about sustainable design and innovative solutions, Rasaki continues to lead Elephant Company with a forward-thinking mindset, prioritizing quality and client satisfaction in every renovation project.",
    },
  ];
  return (
    <div>
      <div className="bg-white py-14 flex flex-col items-center">
        <h1 className=" font-bold text-3xl sm:text-5xl font-display mb-10">
          Meet Our CEO
        </h1>
        <div className="px-6 max-w-5xl ">
          {ceocontent.map(({ id, Image, Text }) => (
            <div
              key={id}
              className=" flex flex-col lg:flex lg:flex-row gap-17 justify-center items-center "
            >
              <div className="flex flex-col items-center  justify-center w-[244px]   h-[341px]">
                <img src={Image} className="  w-full h-[271px] " />
                <h1 className="text-center  flex flex-col justify-center items-center ">
                  <span className="font-bold font-display text-xl">
                    {" "}
                    Rasaki{" "}
                  </span>
                  <span className="text-base font-display font-normal">
                    C.E.O
                  </span>{" "}
                </h1>
              </div>
              <p className="  text-base sm:text-xl font-display font-normal max-w-[660px]  ">
                {Text}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meetceo;
