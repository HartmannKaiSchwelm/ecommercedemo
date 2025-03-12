import React from 'react'
import HeroPic from "../assets/hero.jpeg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-15 h-[2px] bg-black mx-3"></div>New Trend<div className="w-15 h-[2px] bg-black mx-3"></div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">AUTUMN SALE STYLISH 
            <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={"/"} className="self-start border-b">Discover more</Link>
        </div>
      <div className="hidden lg:flex">
        <img src={HeroPic} alt="models" />
      </div>
        </div></section>
  )
}

export default Hero