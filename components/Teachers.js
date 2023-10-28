import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import getScrollAnimation from "../utils/getScrollAnimation";
import {useMemo} from "react";
import { motion } from "framer-motion";

export const Teachers = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  return <div
    className="bg-gradient-to-b from-white-300 to-white-500 w-full "
    id="testimoni"
  >
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
    <div className="flex flex-col w-full mt-16 md:my-16">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12  lg:w-6/12 mx-auto">
          Наши преподаватели
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
        >
          Знают ЕГЭ изнутри и научат всем тонкостям
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="w-full flex flex-col">
        <motion.div variants={scrollAnimation}>
          <Testimoni />
        </motion.div>
      </ScrollAnimationWrapper>
      
    </div>
  </div>
  </div>
}