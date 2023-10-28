import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useMediaQuery} from "../utils/hooks/media";


const teachers = [  {
  subjects: 'Химия',
  name: 'Кузнецова Мария Андреевна',
  desc: 'Победитель всероссийского конкурса «Учитель будущего». Опыт преподавания более 20 лет.',
  src: './assets/teachers/1.jpg'
},
  {
    subjects: 'Английский язык',
    name: 'Шевченко Евгения Владимировна',
    desc: 'Преподаватель английского и профессиональный переводчик. Обладатель сертификата TESOL.',
    src: './assets/teachers/2.jpg'
  },
  {
    subjects: 'География',
    name: 'Горлов Александр Семенович',
    desc: 'Заведующий кафедрой БЖД БГТУ. Кандидат географических наук.',
    src: './assets/teachers/3.jpg'
  },
  {
    subjects: 'Математика, Физика',
    name: 'Королева Виктория Николаевна',
    desc: 'Преподаватель физики БГТУ. Кандидат физико-математических наук. Опыт преподавания более 15 лет.',
    src: './assets/teachers/4.jpg'
  },
  {
    subjects: 'Русский язык, Литература',
    name: 'Аветисян  Юлия Анатольевна',
    desc: 'Преподаватель кафедры русского языка БелГУ. Опыт преподавания более 30 лет.',
    src: './assets/teachers/5.jpg'
  },
  {
    subjects: 'Обществознание',
    name: 'Васильева Милана Ивановна',
    desc: 'Эксперт ЕГЭ-2022 по обществознанию. Опыт подготовки школьников к экзаменам 10 лет.',
    src: './assets/teachers/6.jpg'
  },

]

const Testimoni = ({
  listTestimoni = [

  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  
  const matches = useMediaQuery('(min-width: 1280px)')
  return (
    <section className="text-gray-600 body-font">
      <div className="py-6">
        <Slider
          infinite={true}
          slidesToShow={matches ? 3 : 2} // Отображать 3 карточки одновременно
          centerMode={true} // Выравнивать карточки по центру
          className="flex flex-wrap -m-4"
        >
          {teachers.map((teacher) => {
            return (
              <div key={teacher.name} className="p-4">
                <div className="hidden md:block h-full border-2 border-gray-500 rounded-xl overflow-hidden w-full">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-top lg:object-center"
                    src={teacher.src}
                    alt="blog"
                  />
                  <div className="p-3 mx-2 text-left h-56">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {teacher.subjects}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {teacher.name}
                    </h1>
                    <p className="leading-relaxed mb-3">{teacher.desc}</p>
                  </div>
                </div>
              
              </div>
            );
          })}
        </Slider>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-2 py-8 px-6 sm:px-0">
          {teachers.map((teacher) => {
            return (
              <div key={teacher.name} className="">
                <div className="h-[40vh] sm:h-full border-2 border-gray-500 rounded-xl overflow-hidden w-full">
                  <img
                    className="lg:h-48 md:h-36 h-44 w-full object-cover object-top md:object-center"
                    src={teacher.src}
                    alt="blog"
                  />
                  <div className="p-3 mx-2 text-left h-56">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {teacher.subjects}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {teacher.name}
                    </h1>
                    <p className="leading-relaxed mb-3">{teacher.desc}</p>
                  </div>
                </div>
              
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;