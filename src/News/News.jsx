import React, { useState } from 'react'
import '../Hero/Hero.css'
import { SlideImg } from '../assets/Slide'
import { imgAssets } from '../assets/imgAssets'
import Slide from './Slide'

const News = () => {
  const [toggletab,setToggletab] = useState(1)

  const slides =[
    SlideImg.News_1,
    SlideImg.News_2,
    SlideImg.News_3,
    SlideImg.News_4,
    SlideImg.News_5,
    SlideImg.News_6,
    SlideImg.News_7,
  ]

  return (
    <div className='news h-screen relative'>
      <div className='flex lg:gap-[50px] gap-2 lg:flex-row flex-col'>
        <div className='lg:ml-[150px] m-8 mt-[50px] lg:mt-[180px] max-w-lg'>
       <Slide>
        { slides.map((image,i)=>( <img src={image} key={i} />))}
          </Slide>
        </div>



        <div className='text-white mt-10 lg:mt-[150px] lg:w-auto m-8  lg:ml-10 font-thin text-lg lg:text-3xl'>
          <div className='flex lg:gap-[50px] gap-10'>
            <h1
             className={`opacity-70 cursor-default hover:opacity-100 ${toggletab === 1 ? "opacity-100" : ""}`}
             onClick={()=>setToggletab(1)}>Latest</h1>
            <h1 className={`opacity-70 cursor-default hover:opacity-100 ${toggletab === 2 ? "opacity-100" : ""}`}
            onClick={()=>setToggletab(2)}>Event</h1>
            <h1 className={`opacity-70 cursor-default hover:opacity-100 ${toggletab === 3 ? "opacity-100" : ""}`}
            onClick={()=>setToggletab(3)}>News</h1>
            <h1 className={`opacity-70 cursor-default hover:opacity-100 ${toggletab === 4 ? "opacity-100" : ""}`}
            onClick={()=>setToggletab(4)}>Notice</h1>
          </div>
          <div className=''>
            <div>
              <ul className={` text-[12.5px] lg:text-[18px] mt-5 lg:mt-10 font-light ${toggletab === 1 ? "block" : "hidden"}`}>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Latest] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[Latest] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Latest] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[Latest] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Latest] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[Latest] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
            
              </ul>
            </div>
            <div>
              <ul className={`text-[12.5px] lg:text-[18px] mt-5 lg:mt-10 font-light ${toggletab === 2 ? "block" : "hidden"}`}>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Event] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[Event] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Event] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[Event] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
              </ul>
            </div>
            <div>
              <ul className={`text-[12.5px] lg:text-[18px] mt-5 lg:mt-10 font-light ${toggletab === 3 ? "block" : "hidden"}`}>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[News] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[News] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[News] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[News] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[News] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[News] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
            
              </ul>
            </div>
            <div>
              <ul className={`text-[12.5px] lg:text-[18px] mt-5 lg:mt-10 font-light ${toggletab === 4 ? "block" : "hidden"}`}>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Notice] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className=' px-2 hover:opacity-70  cursor-default mt-2'>[Notice] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
                <li className='bg-zinc-700 px-2 hover:opacity-70  cursor-default mt-2'>[Notice] VERSION "WINTER SHAKLES" UPDATE NOTE</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-end mt-5 sm:hidden'>
            <img src={imgAssets.More_btn} className='hover:scale-110 transition'/>

          </div>
        
        </div>
      </div>
    </div>
  )
}

export default News