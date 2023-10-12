import React from "react"
import style from './card.module.css'
import imgg from './vecteezy_drone-icon-shape-vector-illustration_8361607.jpg'
export default function Card({name,price,img}){
return(
    <div className={style.box}>
        <img src={img}></img>
        <div className={style.outerdiv}>
        <span className={style.name}>{name}</span>
        <price className={style.price}>&#8377; {price}</price>
        </div>
    </div>
)
}