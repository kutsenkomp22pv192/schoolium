import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const subjects = [
  {
    img: '/assets/1.svg',
    name: "Русский язык"
  },
  {
    img: '/assets/2.svg',
    name: "Химия"
  },
  {
    img: '/assets/3.svg',
    name: "Математика"
  },
  {
    img: '/assets/4.svg',
    name: "География"
  },
  {
    img: '/assets/5.svg',
    name: "Литература"
  },
  {
    img: '/assets/6.svg',
    name: "Английский язык"
  },
  {
    img: '/assets/7.svg',
    name: "Физика"
  },
  {
    img: '/assets/8.svg',
    name: "Обществознание"
  },
]

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              База предметов
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Все что нужно для успешной сдачи экзаменов
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-8 px-6 sm:px-0">
            {subjects.map(({img, name})=>{
              return <ScrollAnimationWrapper key={name} className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 w-full "
                  whileHover={{
                    scale : 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 relative">
                    <Image
                      src={img}
                      width={180}
                      height={180}
                      alt={name}
                    />
                  </div>
                  <div className="text-lg text-black-600 font-medium capitalize my-2">
                    {name}
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;