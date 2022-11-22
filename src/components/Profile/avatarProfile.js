import React from "react";


const Avtar = () => {
  return (
    <>
      <div className="w-[30vw]   flex">
        <div class="w-40 h-40 ml-5 mr-7 mt-2">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
        </div>
        <div className="flex flex-col">
          <h3>UserName</h3>
          <h4>loginUser</h4>

          <ul className="flex justify-between mt-10 w-[20vw] ">
            <li className="flex flex-col">
              вфеф <span>1</span>
            </li>
            <li className="flex flex-col">
              выаф <span>3</span>
            </li>
            <li className="flex flex-col">
              фвыа <span>91</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Avtar;
