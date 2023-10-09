import React from "react"
import style from './card.module.css'
export default function Card({name,price,dilivery}){
return(
    <div className={style.box}>
        <span className={style.name}>{name}</span>
        <price>{price}</price>
        <dilivery>{dilivery}</dilivery>
    </div>
)
}