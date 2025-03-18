import React from 'react'
import HeroPic from "../assets/kiModels.png"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="font-montserrat h-[800px]  bg-custom-prim bg-no-repeat bg-cover lg:py-24 ">
    <div className="container mx-auto flex justify-around h-full text-custom-quat">
      <div className="flex flex-col justify-center bg-custom-prim h-[200px] mt-100">
        <div className="font-semibold flex items-center uppercase">
          <div className="w-20 h-[1px] bg-black mx-3"></div>
          This season´s must-have
          <div className="w-20 h-[1px] bg-black mx-3"></div>
        </div>
        <Link to={`/`}>
        <h1 className="text-[70px] leading-[1.1] font-semibold mb-4">
          SPRING FASHION
          <br />
          <span className="font-light">TIMELESS & TRENDY</span>
        </h1>
        </Link>
      </div>
      <div className="hidden lg:flex relative h-[300px] md:h-[704px]"
      >
        <img src={HeroPic} alt="models" className="object-cover h-full md:h-auto"/>
      </div>
    </div>
  </section>
  )
}

export default Hero