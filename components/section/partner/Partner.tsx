import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const ListImage = [
  {
    imgUrl: "/amazon.png",
  },
  {
    imgUrl: "/ODC.png",
  },
  {
    imgUrl: "/ey.png",
  },
  {
    imgUrl: "/Nokia.png",
  },
  {
    imgUrl: "/ANDAO.png",
  },
  {
    imgUrl: "/STUDIO.png",
  },
  {
    imgUrl: "/RAVINALA.png",
  },
];

const Partner = ({}: Props) => {
  return (
    <div className=" mb-32">
      <div className="bg-primary h-2 w-[10%] mx-auto" />
      <div className="bg-secondary w-full mb-20">
        <h1 className="ml-[15%] text-[40px] pt-11 text-white font-black">
          Nos contributions ODD
        </h1>
        <div className="bg-secondary w-full flex flex-col items-center justify-center text-center overflow-hidde px-10 sm:p-10 md:p-16 lg:p-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-[80%] gap-y-3 gap-x-9">
            <Image src="/F-WEB1.png" alt="" width="500" height="500" />
            <Image src="/F-WEB2.png" alt="" width="500" height="500" />
            <Image src="/F-WEB3.png" alt="" width="500" height="500" />
          </div>
        </div>
      </div>

      <h2 className="text-center text-3xl font-bold text-secondary ">
        Nos Partenaires
      </h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
      >
        {ListImage.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-6"
            style={{ width: "200px" }}
          >
            <Image
              src={item.imgUrl}
              alt={`Partner ${index + 1}`}
              width="170"
              height="170"
              className="h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
