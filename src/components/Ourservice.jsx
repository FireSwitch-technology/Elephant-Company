import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "../assets/materials/homereno.mp4";
import video2 from "../assets/materials/plastering.mp4";
import video3 from "../assets/materials/interior.mp4";
import video4 from "../assets/materials/commreno.mp4";
import video5 from "../assets/materials/Floorinstallation.mp4";

const Ourservice = () => {
  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0; // Reset video to the beginning
  };

  const ImageBg = [
    {
      id: 1,
      Image:
        "https://s3-alpha-sig.figma.com/img/8fb1/cfee/910191edb7f87a9412b6f98b6aa1e19d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cv2CO1tckLC9PwfV~drmHD8henyP5XussHGkCZaLfD9LgqkyUaY1EdGitOo2aaBycS3ok9b1vc-k2a6qEVRfMTGpoMwhJ81brBwFW~sCfa1RIq~kTTQPdt3Fky~C1WPOXq8amPKZsSaNxDc4xboHts4U5pfHk8zkRfYL4VCHCyubnmzBt-t3z2KDTYnsDGSKR7AScOPe5k0HiOByTbU2E0baXIZnOdSFCI5jraoueSmIY~fMPECaUdE1UkbacBtNzatS6x-Fl0rpMaGZQ6uy65yUo9RctGcOs7evkAT3fK84di6if8FTHPFxFQLvZ7qDRak~LWDHXAH8C7WsNm4UDw__",
      name: "Home Renovations",
    },
    {
      id: 2,
      Image:
        "https://s3-alpha-sig.figma.com/img/e4ca/6c9d/72fbc7a869266bdb36898593279ed1a2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nUoGKawPWy8v5yGRKT30rB5zkOxhyGJ3Kr7liaZdENllvAHZBknXadG~VUp5zdzjuGEXJ9puPqxTFQlihxG37ztwoMEtcwYCcvn4glDZOA16Di1-m05n2ofh7m2Hi~W0Mvah1vX9lIcAKc3syfAs9sHay6WZ0nLXI-z6gzGWJi7tPvZ3r16qGmaLPFaawt8AoW2ryylHjpECcDqU6sUdcXpfBYVGIgpJ9eVW7ha8MKTfObjnKAdC~OUFeMnpS2O4PqPwn99lujcmYcIq5GOGtCYHrui9BN40xRGVAZgve~WXsUHKCVm63wlB4gM7ouriXXqsPozoXFhw9JE4bj-yEQ__",
      name: "Interior & Exterior Painting",
    },
    {
      id: 3,
      Image:
        "https://s3-alpha-sig.figma.com/img/48ba/b906/82c827c6bc5ef80a75f581060fc0f3fb?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qsU6J7y3U7wSp~Lgj3HXqlRu-qK-m9g7GSqy44NiejwuLa6luL~KYxW-NJUZCHY0Mhh43f3dLmc-gZmuE1XMRy9jw6wL9j03zZZ~V-hAL0nnPvPb6-RARMdo9AjeKt730cRUkYJGoBQ-RzED7R6HZqaCisuljmhhcOHJ8Ddxh2K779xWZ8JQm5DOj5uVJ5Ox9L7Zdhp6~hSSb8YMWGiLckMXQ1EcB0Q5DP-xpMKpqIMcf0WXT31DRKc4hdSLlw-0zxetLH9-E~NVnIQJOh-pE3HCjVWXI54iDUqW705Us7gYX22fTg-AAaMMAJZfi-Nd8gDzFJUZxeZ3GTSNtvSAeA__",
      name: "Flooring Installation",
    },
    {
      id: 4,
      Image:
        "https://s3-alpha-sig.figma.com/img/7c8c/99c6/7866325f72eca91d76abf58a1f1ec9a9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iBhBvXnEEXBuL1kFbGIhKQW2wfERres-oTRJ-98b35RmGwVHBSq5VelNZ27GXbJmOqWQf6kd~9fsIPNkt~eRLymdDAQGhku40HIRvtHezU21HyjJ4MOffrxKEuxIhuYdn5xCItQv424jgWHN19571oELPkk08e5aXAH-qCfqxE9UMF55FMos7g~UrajR3ZZuFSO9RLN83clXNlob42M-t8Kb5TCoMW1dCX2mlWqxEUW7TnfEUFq5WawNUqLXFQdOun5kvIkFdDtM6mQ8wrc4LBqB3gSn8kjOaCPbzJ9BDha2lxChWfh4WbT9rzAcvnVjO7lOiiSSlwbEKrHRu~1uWw__",
      name: "Commercial Renovations",
    },
    {
      id: 5,
      Image:
        "https://s3-alpha-sig.figma.com/img/acd9/f8b9/1ff25e31283249f29a6a35f831f42126?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HXn6oR0m6L0eJj89D1iEplMeT2PHA5epCNC-hSNALGay-oRb-BF3cngS-9yiKjj4WlpifGOwLvhIGu8pKb7XAOYA7zPvvPwPrXsg4h4pBylrydpn5rgByM8xbhmR3~T6ZeJ807TIGRjzfIaiFmfDaqvJhF4K5FBF17XxU3F7kRnjW2-rCJ6lwZ2On-1PWFa7AfYfiyTaVEc42vU6qvYBrspH-dNn-NgRSbcpdmhLplTAOQ7ZV-1X4Lcw~2YfZglDit8pUKhAEgOHH1So6O~taqd4As79c60vrUJWw0bIRRqt3EMUmB-y-gXYAJt8PbiOmuApagX4tilobTjwa-gyRw__",
      name: "Drywall & Plastering",
    },
  ];
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="px-4 py-12 w-full bg-gray-200 flex flex-col items-center justify-center ">
      <div className=" mx-auto  max-w-6xl    ">
        <h1
          data-aos="zoom-in"
          className=" text-center font-bold text-5xl font-display text-black mb-14"
        >
          {" "}
          Our Service
        </h1>

        {/*  */}

        <div className="flex flex-wrap justify-evenly items-center ">
          {ImageBg.map(({ id, Image, name }) => (
            <div
              key={id}
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" relative  w-full sm:w-[48%] md:w-[45%] lg:w-[48%] h-[500px] rounded-3xl mb-8 "
            >
              <div className=" absolute  top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black to-transparent opacity-50 rounded-3xl"></div>
              <img
                src={Image}
                className=" w-full h-full object-cover rounded-3xl"
              />

              <p className="absolute bottom-4 left-5 text-xl md:text-3xl font-display font-medium  text-white">
                {name}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
