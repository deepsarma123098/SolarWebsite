import React from 'react'
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";


function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>


    <BackgroundBeamsWithCollision>
    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
    Tired of high electricity bills?{" "}
    <br></br>
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-green-500 via-green-300 to-green-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span className="">Use Solar to Thrive.</span>
        </div>
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-rfrom-green-500 via-green-300 to-green-700 py-4">
          <span className="">Use Solar to Thrive.</span>
        </div>
      </div>
    </h2>
  </BackgroundBeamsWithCollision>
  </div>
  )
}

export default HeroSection
