import { useState } from "react";


export const useCharacter =()=>{
  const   [pos,setPos]= useState({x:3,y:7})
  const moveLeft = () => {
    setPos(pos => ({
        x: pos.x -1,
        y: pos.y
    }));
   
}
const moveRight = () => {
    setPos(pos => ({
        x:pos.x +1,
        y: pos.y
    }));
   
}



  return{

      x: pos.x,
      y:pos.y,
      moveLeft,
      moveRight


   
  }
}