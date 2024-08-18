import React, { useRef } from "react";
const DataVideo2 = ({setDataPlay2, dataPlay2, src}) => {
    const player = useRef(null);

  const closePlay = (e) => {
    if (e.target === player.current) {
      setDataPlay2(false);
    }
  };
  
    
  return (
    <div
      className={`fixed top-0 right-0 h-[100%] w-[100%] flex justify-center z-[100]
     align-center bg-black/75 ${dataPlay2 ? "" : "hidden"}`}
      onClick={closePlay}
      ref={player}
    >
      <video
        
        className="w-[100%] max-w-[1000px] h-[80%] border-4 object-cover mt-[5%] border-zinc-950"
        src={src}
        autoPlay
        controls
        muted
      ></video>
    </div>
  )
}

export default DataVideo2