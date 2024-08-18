import React, { useEffect, useState } from 'react'
import './Features.css'
import {imgAssets} from '../assets/imgAssets'

const Features = () => {

  const [cardImg,setCardImg] = useState(0)
  
  const data = [
    imgAssets.Feature1,
    imgAssets.Feature2,
    imgAssets.Feature3,
    imgAssets.Feature4,
    imgAssets.Feature5,
  ]

  VanillaTilt.init(document.querySelector(".box"), {
		max: 15,
		speed: 100
	});
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardImg((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [cardImg]);

return (
    <div className='feature h-screen'>
      <div className='py-8'>
      <div className='box flex flex-col justify-center items-center relative mx-10 lg:mt-0 mt-40'>
        <img src={data[cardImg]}
         className='card1 lg:w-[60%] w-[100%] mt-[7%] z-10 transition-all'/>
        <img src={imgAssets.Feature_text} className='card2 mt-3' />
        <img src={imgAssets.Feature_overlay} className='card3 absolute -top-5 lg:top-7 right-[23%]'/>

      </div>
      </div>
    </div>
  )
}

export default Features