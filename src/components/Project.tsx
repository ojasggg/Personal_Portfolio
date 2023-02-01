import React from "react";

const Project = () => {
  return (
    <section className="flex h-[100vh] py-10">
      <div className="flex w-[50%] flex-col justify-between">
        <div>
          <div>
            <h3 className="font-AvenirHeavy text-[30px]">01</h3>
          </div>
          <div className="mt-[200px]">
            <h1 className="p-0 font-AvenirHeavy text-[80px] leading-none">
              CryptoCurrency
            </h1>

            <div className="mt-[35px] flex items-center gap-4">
              <h6 className="font-AvenirMedium text-[30px]">
                Front End Development
              </h6>
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <h6 className="font-AvenirMedium text-[30px]">React</h6>
            </div>
          </div>
          <div className="mt-[16px]">
            <p className="max-w-[700px] font-AvenirBook text-[26px] leading-normal text-white/60">
              Cryptocurrency Landing Page with animation using AOS react library
              and Tailwindcss for styling.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-AvenirHeavy text-[24px] uppercase">Website</h3>
        </div>
      </div>
      <div className="w-[50%] bg-red-200"></div>
    </section>
  );
};

export default Project;
