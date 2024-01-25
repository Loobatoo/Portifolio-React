import React from 'react'

import { useState,useEffect } from 'react'

const Image = ({Img1, Img2}) => {

    const Images = [Img1, Img2]

    const [Var, SetVar] = useState(0)
    
    const executaAcao = () => {
        SetVar(1);
    
        setTimeout(() => {
          SetVar(0);
        }, 1000);
      };
    
    useEffect(() => {
        const intervalId = setInterval(executaAcao, 4000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

  return (
    <div>
        <img src={Images[Var]} alt="" />
    </div>
  )
}

export default Image