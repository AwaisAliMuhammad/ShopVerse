import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import HeroProduct from '../assets/HeroProduct.png'
import HeroProductSlide2 from '../assets/HeroProductSlide2.webp'
import HeroProductSlide3 from '../assets/HeroProductSlide3.png'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    badge: "NEW COLLECTION",
    title: "Discover Modern",
    highlight: "Fashion",
    description:
      "Shop the latest collection of premium quality products at the best price.",
    image: HeroProduct,
  },
  {
    id: 2,
    badge: "NEW COLLECTION",
    title: "Summer Collection",
    highlight: "Upto 30%",
    description:
      "Shop the latest collection of premium quality Clothes, Shoes, Accessories and many more.",
    image: HeroProductSlide2,
  },
 {
    id: 3,
    badge: "NEW COLLECTION",
    title: "Premium Electronics",
    highlight: "Brands",
    description:
      "Fill your cart with giant brands of Electronics which gives you extreme comfort in your life.",
    image: HeroProductSlide3,
  }
]

const HeroSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false)

  const slide = slides[currentSlide]

  const nextSlide =()=>{
    setCurrentSlide((prev)=>{
      if(prev === slides.length-1){
        return 0
      }
      return prev+1
    })
  }
  const prevSlide =()=>{
    setCurrentSlide((prev)=>{
      if(prev === 0){
        return slides.length-1
      }
      return prev-1
    })
  }

  useEffect(()=>{

    if(isAutoPlayPaused) return
    
    const interval = setInterval(nextSlide,3000)
    return ()=> clearInterval(interval)
  },[isAutoPlayPaused])

  return (
    <div className='px-3 sm:px-5'>
        <div onMouseEnter={() => setIsAutoPlayPaused(true)}
        onMouseLeave={() => setIsAutoPlayPaused(false)}
        className='relative overflow-hidden rounded-lg bg-[#EEE8FC] flex flex-col-reverse lg:flex-row items-center px-6 sm:px-10 lg:px-20 py-10 lg:py-0 min-h-102.5 lg:h-112.5'>
            <div id="left" className='w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start'>
                <h4 className='text-xs sm:text-sm text-blue-700 font-bold'>{slide.badge}</h4>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>{slide.title} <br /> <span className='text-blue-700'>{slide.highlight}</span></h1>
                <p className='text-sm sm:text-base max-w-md text-gray-700'>{slide.description}</p>
                <Link to={'/products'} className='flex items-center justify-center gap-2 w-36 h-12 sm:h-14 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition hover:scale-105 active:scale-95 cursor-pointer'>Shop Now <ArrowRight size={17}/></Link>
            </div>
            <div id="right" className='w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0'>
            <img src={slide.image} alt="Fashion Products" className='w-62.5 sm:w-[320px] md:w-105 lg:w-full object-contain transition-transfor duration-500 hover:scale-110'/>
            </div>
            <div className='flex items-center'>
            <button onClick={prevSlide}
              className="hidden md:flex absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 bg-white text-neutral-500 hover:text-black p-3 transition-transform hover:scale-110 rounded-full shadow-lg hover:shadow-gray-400 cursor-pointer hover:bg-gray-100">
              <ChevronLeft />
            </button>
            <button onClick={nextSlide}
              className='hidden md:flex absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 bg-white text-neutral-500 hover:text-black p-3 transition-transform hover:scale-110 rounded-full shadow-lg hover:shadow-gray-400 cursor-pointer hover:bg-gray-100'>
              <ChevronRight />
            </button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((item,idx)=>(
                <button onClick={()=>setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-400 cursor-pointer ${idx === currentSlide?'bg-blue-500':'bg-gray-300'}`} key={item.id}></button>
              ))}
            </div>
        </div>
    </div>
  )
}

export default HeroSection