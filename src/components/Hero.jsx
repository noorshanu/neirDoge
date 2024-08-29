import React from "react";

function Hero() {
  return (
    <section className=" relative   py-20  ">
      <div className=" container-wrapper  ">
        <div className=" flex flex-col sm:flex-row justify-between  ">
          <div className=" w-full sm:w-1/2  ml-8 relative" data-aos="fade-right" data-aos-duration="1500">
            <h2 className=" text-[#f4dc75] text-4xl font-bold font-dream">
              Welcome To
            </h2>
                <img src="images/rose.png" alt="" className=" h-[120px] top-0 left-52 w-auto absolute" />
            <h1 className=" txt-s text-[100px] font-bold text-[#f4dc75] font-little stroke-black  ">
              {" "}
              Flirty Doge
            </h1>

            <p className=" text-white text-lg pr-5">
              FLIRTY, the spoiled and wealthy cousin of Doge, is always at the
              center of attention with his extravagant lifestyle and love for
              stirring up trouble. When he's not causing a scene, he's charming
              the ladies with his flirtatious nature, adding a playful twist to
              his bold adventures.
            </p>
            <div className="bg-[#f4dc75] text-[14px] z-30 w-full -rotate-3 rounded-full border-4 px-5 py-[5px] border-black font-semibold">
             Coming soon
            </div>
            <div className=" mt-4 flex gap-2 items-start justify-start">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/"
                className="  font-dream box-s2   text-xl text-black bg-[#ffffff] hover:bg-[#f4dc75] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"
              >
                {" "}
                DexTools
              </a>

              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/BQh9tCLYGZp5gFVEBiEY85EfepbsVZfbTr1mSk53HEp4?t=1720532988176"
                className="  font-dream box-s2   text-xl text-black bg-[#ffffff] hover:bg-[#f4dc75] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"
              >
                {" "}
                Twitter
              </a>
            </div>
          </div>

          <div className=" w-full sm:w-1/2" data-aos="fade-left" data-aos-duration="1500">
            <img src="images/about.png" alt="" className=" mx-auto h-auto " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
