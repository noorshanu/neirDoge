import React from "react";

function Hero() {
  return (
    <section className=" relative   py-20  ">
      <div className=" container-wrapper  ">
        <div className=" flex flex-col sm:flex-row justify-between  ">
          <div
            className=" w-full sm:w-1/2  ml-8 relative"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className=" text-[#f4dc75] text-4xl font-bold font-dream">
              Welcome To
            </h2>

            <h1 className=" txt-s text-[100px] font-bold text-[#f4dc75] font-little stroke-black  ">
              {" "}
              Black Neiro
            </h1>

            <p className=" text-white text-lg pr-5">
              Black Neiro is the wildest meme coin ride, starring a thug,
              fun-loving Doge and its unstoppable DogeKnight army. Swagger,
              street smarts, and big laughs—this meme all about living large,
              breaking rules, and making gains. Buckle up, ‘cause Black Neiro’s
              here to own the solana meme world!
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
                href="https://www.dextools.io/app/en/solana/pair-explorer/"
                className="  font-dream box-s2   text-xl text-black bg-[#ffffff] hover:bg-[#f4dc75] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"
              >
                {" "}
                Twitter
              </a>
            </div>
          </div>

          <div
            className=" w-full sm:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/logo2.png" alt="" className=" mx-auto h-auto " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
