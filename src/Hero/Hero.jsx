import React, { useState } from 'react'
import './Hero.css'
import {imgAssets} from '../assets/imgAssets'
import {vidAssets} from '../assets/vidAssets'
import Sidebar from '../Sidebar/Sidebar'




const Hero = ({setPlay}) => {

  return (
    <>

    <div className='h-screen hero'>
      <Sidebar />
      <img src={imgAssets.Logo}  className='z-10 absolute top-10 left-10 w-[20rem]'/>
      <video src={vidAssets.BgVideo} loop muted autoPlay
      className='absolute top-0 w-full h-screen lg:h-auto object-cover lg:top-[-112px]'></video>
      <div className='social-icons'>
        <div className='lg:block hidden'>
          <img src={imgAssets.QrCode} className='absolute bottom-3 w-[100px] right-5'/>
          <img src={imgAssets.BarCode} className='absolute bottom-[100px] qr-bar right-5 w-[100px]' />
        </div>
        <div className='absolute bottom-3 flex right-[25%] lg:right-[10%] gap-2 flex-col items-end '>
          <div className='flex lg:gap-2 gap-5'>
          <img src={imgAssets.facebook} className='w-8 h-8 opacity-[0.8] hover:opacity-[1]' />
          <img src={imgAssets.youtube} className='w-8 h-8 opacity-[0.8] hover:opacity-[1]' />
          <img src={imgAssets.twitter} className='w-8 h-8 opacity-[0.8] hover:opacity-[1]' />
          <img src={imgAssets.discord} className='w-8 h-8 opacity-[0.8] hover:opacity-[1]' />
          </div>
          <div className='lg:flex gap-2 hidden'>
            <img src={imgAssets.playstore} className='w-[130px] transition hover:scale-105' />
            <img src={imgAssets.appstore} className='w-[130px] transition hover:scale-105 ' />
            <img src={imgAssets.windowstore} className='w-[130px] transition hover:scale-105' />
          </div>
        </div>
      </div>


      <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
      >
        <img src={imgAssets.ButtonPlay}
         className='w-[80px] transition cursor-pointer vid-btn hover:scale-110' 
         onClick={()=>{setPlay(true)}}/>
      </div>
      <div className='absolute bottom-3  left-[50%] translate-y-[-50%] translate-x-[-50%]'>
       <img src={imgAssets.ArrowDown} className='arrowdown' />
      </div>
    </div>
    
    </>
  )
}

export default Hero