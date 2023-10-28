import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  
  const faqData = [
    {
      question: 'Как проходит формирование групп?',
      answer: 'Группы формируются в соответствии с уровнем подготовки учеников по 5-7 человек.',
    },
    {
      question: 'Есть пробное занятие?',
      answer: 'Да, есть пробное занятие, чтобы определить подходит ли программа и учитель ученику.',
    },
    {
      question: 'Есть ли возможность отмены занятий?',
      answer: 'Да, есть возможность отмены занятий, но нужно заранее предупредить об этом учителя.',
    },
    {
      question: 'Сколько предметов можно выбрать?',
      answer: 'Вы можете выбрать любое количество предметов, необходимых  для поступления.',
    },
  ];
  
  
  return (
    <div
      className="max-w-screen-xl mt-2 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="faq"
    >
      <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-8 p  y-8 xs:my-12 ">

        <ScrollAnimationWrapper>

        <motion.div className=" flex flex-col items-center justify-center ml-auto pl-4 sm:pl-1 sm:w-full lg:w-9/12" variants={scrollAnimation}>

          <h3 className=" text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 mt-6">
            Часто задаваемые вопросы
          </h3>
          
          
          <div className="mt-8 w-full">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          
        </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full md:w-full justify-center  md:justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
                src="./assets/Illustration3.svg"
                layout="responsive"
                quality={100}
                height={350}
                width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>




      </div>
    </div>
  );
};

export default FAQ;