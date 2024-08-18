import React from 'react'
import './Others.css'
import {imgAssets} from '../assets/imgAssets'


const Others = () => {
    let data =[
        {bg: imgAssets.Other_bg1, title: imgAssets.Other_title1},
        {bg: imgAssets.Other_bg2, title: imgAssets.Other_title2},
        {bg: imgAssets.Other_bg3, title: imgAssets.Other_title3},
    ]
  return (
    <div className='flex h-screen w-full bg-black other'>
        {
            data.map((item,i)=>(
                <div key={i} className='relative main-bg transition-all overflow-hidden flex items-center'>
                    <img src={item.bg} className='transition-all bg-img'/>
                    <div className='title'>
                        <img src={item.title}  />
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Others