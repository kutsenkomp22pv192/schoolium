import {motion} from "framer-motion";
import ButtonPrimary from "./misc/ButtonPrimary";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import {useMemo} from "react";
import { useState } from "react";
import React from "react";
import {Modal} from "./Modal";


export const Form = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия поп-ап окна
  
  const handleOpenModal = () => {
    console.log('da')
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  
  return <>
  
  <div
    className=" w-full py-14 relative"
  >
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
    <ScrollAnimationWrapper className="relative w-full md:mt-16 ">
      <motion.div variants={scrollAnimation} custom={{duration: 3}}>
        <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-14 lg:px-16 w-full flex flex-row flex-wrap justify-center sm:justify-between items-center z-10 bg-white-500">
          <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
            <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
              Остались вопросы? <br />
            </h5>
            <p>Оставте заявку и мы свяжемся с вами в ближайшее время!</p>
          </div>
          <ButtonPrimary  onClick={handleOpenModal}>Отправить заявку</ButtonPrimary>
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </motion.div>
    </ScrollAnimationWrapper>
    </div>
  </div>
    {isModalOpen && <Modal onClose={handleCloseModal}/>}
    </>
}