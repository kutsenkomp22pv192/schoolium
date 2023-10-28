import React, {useRef, useState} from "react";
import ButtonPrimary from "./misc/ButtonPrimary";

export const Modal = ({ onClose }) => {
  const [isSend, setIsSend] = useState(false)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  
  const changeToSvg = () => {
    setIsSend(()=> true)
  }
  
  const handleInputName = (event) => {
    setName(event.target.value);
    setNameError(false);
  };
  
  const handleInputPhone = (event) => {
    setPhone(event.target.value);
    setPhoneError(false);
  };
  
  return <div className={"fixed top-0 left-0 right-0 z-20 w-full p-4 bg-white-100 overflow-x-hidden overflow-y-hidden h-full max-h-full flex flex-col items-center justify-center"}>
    <div className="relative w-full max-w-md max-h-full bg-white-500 rounded-xl">
      <div className="relative bg-white rounded-xl shadow-md dark:bg-gray-700">
        <button type="button" onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Отправить заявку</h3>
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имя</label>
              <input type="text" name="name" id="name"
                     disabled={isSend}
                     onChange={handleInputName}
                     value={name}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     placeholder="ФИО" required/>
              {nameError && (
                <p className="text-red-500 text-xs mt-1">
                  Пожалуйста, заполните поле "Имя"
                </p>
              )}
            </div>
            <div>
              <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Телефон</label>
              <input type="tel" name="tel" id="tel" placeholder="+7"
                     disabled={isSend}
                     onChange={handleInputPhone}
                     value={phone}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     required/>
              {phoneError && (
                <p className="text-red-500 text-xs mt-1">
                  Пожалуйста, заполните поле "Телефон"
                </p>
              )}
            </div>
            <div className={'flex justify-center'}>
              {!isSend ? <ButtonPrimary disable={!(!!phone.length && !!name.length)} onClick={changeToSvg}>
                Отправить
              </ButtonPrimary>
              : <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path filRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
            </svg>}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
}