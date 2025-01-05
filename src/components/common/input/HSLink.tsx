import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useState } from "react"
export function HSLink({text, fontSize, stopped, onClick, cooldownTime, theme}: 
  {text: String, fontSize?: number, stopped?: boolean, onClick: Function, cooldownTime: number, theme?: string}) {
  const [hovered, setHovered] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const colorset = getColorTheme(theme ? theme : '');
  
  const style = {
    color: cooldown || stopped ? '#BBB' : hovered ? `rgb(${colorset[9]},${colorset[10]},${colorset[11]})` : `rgb(${colorset[0]},${colorset[1]},${colorset[2]})`,
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