import React from "react";

const Cards = ({data}) => {
  return (
    <>
      <div class="flex flex-col">
        {data.map(el=>(
             <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                    class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={el.img}
                    alt="photo"
                    />
                    <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                        lorem ipsum
                    </p>
                    <p class="text-gray-600 text-xs">lorem ipsum</p>
                    </div>
           </div>
   
        ))}
       
      </div>
    </>
  );
};

export default Cards;
