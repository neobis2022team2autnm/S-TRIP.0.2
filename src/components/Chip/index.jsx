import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

const Chip = (props) => {
  return (
    <div className="flex gap-[10px] items-center p-[10px] text-white bg-gray w-fit  rounded-full text-base" style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && <AiOutlineClose className="cursor-pointer opacity-0 hover:opacity-5" onClick={props.onClose ? props.onClose() : ''} />}
    </div>
  );
};

export default Chip;