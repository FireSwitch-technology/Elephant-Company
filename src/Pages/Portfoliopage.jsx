import React from "react";
import Construction from "../assets/materials/Construction.jpg";
import Workers from "../assets/materials/Workers.jpg";
import Hallway from "../assets/materials/Hallway.jpg";
import Kitchen from "../assets/materials/Kitchen.jpg";
import Ceiling from "../assets/materials/Ceiling.jpg";
import Team from "../assets/materials/team.jpg";
import fffa from "../assets/materials/fffa.jpg";

const Portfoliopage = () => {
  const images = [
    {
      src: "https://s3-alpha-sig.figma.com/img/7b49/ff30/d4ed873fb6c285740f539afdae4ca90a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fZ-8FRtyIwjWWGIEkjos~yUfwgqOf22qRSUyKQ7uLrySf15GG9SINCJl5SX4YhjljKGwdA31iJqvkjkWrhvGy0SUsYUwCTTliJtPbMMqwwENo9mSacPG~HAF-piu2n7xbodkcr-lwrenvtAA8IrvvHcLDHcGnjVkhUEE6nvhle6r9Dykrqou-8lJBhdZ~-Nvp3TYsFE-bKEGgzrlK31o1vCwUWd2NAfIC1eAgYaWkgPDl6scsEta3YhVMy060P3va6J6QwNMWPrJkpDP2l1HTPcDM2BNn3WwPD0LnWmt0J4gBWrX7ouxiW1ZE-tz0eHfFBVV9URFVe-h4izFlw~uYg__",
      alt: "Construction",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "434px",
      height: "300px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/7c44/6354/b570bff55de61d09e005e46bc376ca37?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IMuq6R~2Weuf2n04h1noQ8WfIEmrAhq4ZTV6OPHE-Vodvj7CGE50GIW1Gtj6hLpJDrM2dhVvmrjNAOQvjMN920WiiH~Rf52xSyMb3ZcMG-WZoobz8PuuuXP0kD8jRSn~MZnqrInCX5qRQUaKKH2ufpfLG-3~rZ3lUyhwu8s2ygGs8TVGjMKo3LhL3bHQIH1aJCbpICfxZEWDrr8Ai4ihcN9LIxJl5dsHcXBdwnw5JcmkhTZorPwvHaobQ57d4AISVNslPQc47oGQUW-K2UVGEBpgElvs~pmr7EBqDFe-NKWXcyiZJW0GFWJqgvyWgKTMvKVpdvYWpnOtBikc6aYfuQ__",
      alt: "Painting",
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      width: "434px",
      height: "600px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5f85/2755/d1203fd4d7853537c8514367478c1112?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NzvHslXn48ppMwcJgnRclc-nlAxqs8ANzVWFM4nu98T~WSJZ7fdZEByo6R0m5pLvASqj3uLPw2t84QE9j53~utgteoflzgKn14UnFq2BTHRVJZyntcd5Ypz-UUyMJJfKHKwtmHtAtms7QIYF1RXa3JDPt8-V3VQA9FFmwpym~nbATp2l8vf6MBuv6siWwNkj-Qqd31ONZOXT~ERrghv74v9Zawx3SkGSS4Su4KsAoTOs12AUN7RBo1DBZcQXYbs51HLtrTc8CBsQtHsGuTjWvcsNHhX~x9Efjw0PFQpIm4evYjivJMFi5cy4X95rZSaD-iTpy4e75MLNXHroD83UrA__",
      alt: "Workers",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "364px",
      height: "276px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/e30e/5437/127af1334d158a421d52dec059914423?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eZRmyCqI5C2ujHRE3ozW3yftBhVwvsdrCQCcTv5tlyV3196aAzdjNAmUuiCD1W4HJ6V~hlqHt97oSexj96rOcgCVXUD4xG0zZGjtRsp2SvK9L50xYUG1E3tTnah3~GLMQP6TMhenXeRBSD9N0kADq8PWnotquQm3jEJoC08cmmuWcsC33MSPb-gIZWOZo7kZe0Sk9olyaUUzZMjjJoeL~oSd0k4BoHySaUv-mBmZYxMdfl6~de6byMKOLKTRkZ0mUkSl4UyeahG37CDK9bxYdgIjY0YpI8R9Y50DGeSzcvr50J4Tv8upBzimC8NqaH0iBoQGc9S0AE3XF~844jk1~A__",
      alt: "Scaffolding",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "434px",
      height: "276px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/8167/1349/ab388dc44d5eaae54513f5ad92dc86b3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hcPpvYn4~-JGok4cqd5~5o6lycBZ3wWSMvDhN-wRGIlcCfuFlev0BhTHhx61wNFMW9Ddm4rX~FyYJU2D9o3I1ZaTr8VXsT3wYx5wr5CfOl3fTJGpfkFmkoc8s0xaEdzodkBMV5tkin4397aH8b0kICSCR6cPiy-4m0E3llHmSckIUGlm6awCSk9Ob9BrOqBhkGgOdf5u-L3uq9xiHpogxst570uge67MXJmwXV28oBmXH5o~ZZ28IPnzxi0D4bEFMdsddq~zZD~-vd1Kiy56fpmkImaGQdaCvdR9V-ORZ69LlhDWj-juqOf5BqFGPM81adZtKQBvyeNI8algszDg5A__",
      alt: "Hallway",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "364px",
      height: "476px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/45a5/0a8c/8d9ba681092c303b949d233939140c8e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QylTWsRei~J2bf387qvEH1G3UVF7WdDe0TJ4LOBEtjrok~df5aujE17teS~kW1F7K~fAaEe456kD~BQfaEGWLhvyXhVoQnyJir8LAdK1jmEaf9L4wB3q8PCKnusxpyOLGWBUi3R3D3NhMGaWY-U8yBaednAjLRqlwdBuQJ0LieUCyztAQva11Q70gGeCVPwhlyCnoH9D3r~XotpIqSJ~wgQGY5t6JGH8xNdmuPd49qLpE4lqIShiAJFquDPc3x3M8CgPinGLFcRwyQYSsKM~KmcsD1R-5PB9fdmDRmC-omiVtsJdn3qpalptkD-WeQ4NI~yioDqJphtCYEd-skrH2Q__",
      alt: "Kitchen",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "335px",
      height: "323px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9b22/e8e2/34fa62e97f38325281f8e03d3b244349?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jRSYXjajL9Lwlz8chIKhtQ6rWaGcgrCZezNPLmq9sItJVrbj6beljVx4zmuu~YGCtIDHiwzuRkmwXcj9rbbuOrPD1jRX60fNQ9KPQlcNcRv3fT5TUFb3wdjuSYejT-obOntn3prcm8aJP4KiSH3fFaxf2eZushiVgo94Z6Pc~Bfh1gkJJmMgwWH-DI4RP0UVWbgyR4JcqM8L1ztZjJTFllp6VgykbMZalbyOe5E5kinsK0um3q~ogXZWItrK5V2Fx9DFuypbSBI3sjol--tIDDXW1tmoXrCTT8lJZIX1K2YIXW9a4pPs31CQvTRB5i-4sntE9BRsJCJnSVW1GDaU4A__",
      alt: "Ceiling Work",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "533px",
      height: "323px",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/6f92/183e/fe11350623eaeb6b3196a3a0a87d0444?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NZygTgiDlOOu8F63mRORcNTkt9IGfmquWI6Zt7xBKxp72W2zdI8qwKUM-swDKct59bDiNC5XGAwyUtu16NOQhNAWYeHefm5IWA6P~qsDZttvcDPM-KWHJinjxrI3gNwlR171JfgMrhmTFij7Pcplrw4146803T-o096nUOPG22Wk0jj6-Dv9Tx9R~IadVy4hN4IV3TdmDqahafyB0eelUQxlSOoz8F6ulu5jlY1qOMpa8c2Z~ryceS8CE7x9bpo9PkHs1KL9howieh6fZR6MMwiOvPq4MiTPSXaMYpMiJsetugYZmHPoWA38aN3ZC02vAD7Aos88Wj9qyGvEtANRKg__",
      alt: "Workers Measuring",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "364px",
      height: "239px",
    },
  ];

  return (
    <div>
      {" "}
      <div className=" bg-gray-100   w-full h-fit pt-32">
        <div className=" p-6 md:py-12 max-w-6xl mx-auto ">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm text-gray-600">
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>{" "}
            &gt; <span className="font-bold text-black">Portfolio</span>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] ">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`object-cover rounded-lg w-full h-full ${image.colSpan} ${image.rowSpan}`}
              />
            ))}
          </div>
          {/* Call to Action Section */}
          <div className="mt-12  p-6 md:p-5 rounded-lg text-center bg-white  max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4">
              Transform Your Property Today!
            </h2>
            <p className="text-base sm:text-xl text-black-100 mb-6 px-2">
              Let Elephant Solutions take care of all your home and business
              improvement needs with expertise you can trust.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-200  text-white px-6 py-2 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliopage;
