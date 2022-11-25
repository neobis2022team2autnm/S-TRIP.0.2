import React from 'react';
import logo from '../../assets/images/logos/logo.small.png';
import user from '../../assets/images/user-tech.jpg';
import { GiBackwardTime } from 'react-icons/gi';
import whatsapp from '../../assets/icons/icon-whatsapp.png';
import { useTranslation } from 'react-i18next';



const TechSupport = ({ active, setActive }) => {

  const { t } = useTranslation()

  return (
    <div className={active ? "z-50 w-[400px] h-[422px] rounded-lg  bg-white fixed right-20 bottom-[100px] " : "hidden"}>
      <div className='bg-[#607d8b] w-full text-white p-4'>
        <img className='h-[80px] rounded-full' src={logo} alt="user" />
        <h1 className='py-1 text-[25px]'>Здравствуйте ! 👋</h1>
        <p>Если есть вопросы , напишите нам в Whats-App</p>
      </div>
      <div className='p-5 border-2 border-[#607d8b]'>
        <p className='text-[20px] mb-[10px] font-bold'>Напишите нашей тех.поддержке</p>
        <div className="flex gap-[20px] items-center">
          <img className='h-[80px] rounded-full' src={user} alt="User" />
          <p className='font-semibold '>Среднее время ответа <br />
            <span className='font-thin flex items-center'> <GiBackwardTime />       Менее 10 минут </span>
          </p>
        </div>
        <button className="w-[300px] bg-[#25d366] justify-center text-white flex items-center gap-[10px] p-2 m-4 rounded-[30px]">
          <img class="h-[30px]" src={whatsapp} alt="whatsapp" />
          <a className='text-[20px]' target="_blank" href="https://wa.me/996508755552"> Перейти WhatsApp</a>
        </button>
      </div>
    </div>
  );
};

export default TechSupport;



// const TechSupport = ({ active, setActive }) => {

//   return (
//     <div
//       className={classNames(style.techModal, { [style.active]: active })}
//       onClick={() => setActive(!active)}
//     >
//       <div
//         className={classNames(style.techModal__content, { [style.active]: active })}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className={style.techModal__header}>
//           <img className={style.techModal__logo} src={logo} alt="Logo" />
//           <h1 class={style.techModal__title}>Здравствуйте ! 👋</h1>
//           <p className={style.techModal__desc}>Есть вопросы , напишите нам в Whats-App</p>
//         </div>
//         <div className={style.techModal__text}>
//           <p className={style.techModal__message}>Напишите нашей тех.поддержке</p>
//           <div className={style.techModal__userAccount}>
//             <img src={user} alt="User" />
//             <p>Среднее время ответа <br />
//               <span>       <GiBackwardTime />       Менее 10 минут
//               </span>
//             </p>
//           </div>
//         </div>
//         <button className={style.techModal__whatsapp}>
//           <img src={whatsApp} alt="whatsapp" />
//           <a target="_blank" href="https://wa.me/996508755552"> Перейти WhatsApp</a>
//         </button>
//       </div>
//     </div >
//   );
// };

// export default TechSupport;