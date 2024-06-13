import * as C from './stiled'
import {CharacterSides  } from "../../Types/characterType";


type Props={
    x:number
    y:number
    side:CharacterSides  
}
const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
}
export const Character =({x,y,side}:Props)=>{
    const size = 30;
    return(
<C.Container sidePos={sides[side] ?? 0} size={size} left={x*size} top={y*size} >...</C.Container>

    )
}