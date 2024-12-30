import React from 'react';
import { useState } from "react"
export function HSLink({text, fontSize, stopped, onClick, cooldownTime}: 
  {text: String, fontSize?: number, stopped?: boolean, onClick: Function, cooldownTime: number}) {
  const [hovered, setHovered] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const style = {
    color: cooldown || stopped ? '#BBB' : hovered ? '#E7A0FA' : '#C780FA',
    fontSize: fontSize ? fontSize : 16,
    cursor: cooldown || stopped ? 'default' : 'pointer',
    transition: 'all 0.5s',
    background: 'transparent',
    border: 'none',
    outline: 'none',
  }
  function clicked() {
    if(!stopped && !cooldown) {
      onClick();
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
      }, cooldownTime);
    }
  }

  return <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={clicked} style={style}>{text}</button>

}