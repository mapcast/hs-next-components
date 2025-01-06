import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useState } from "react"
export function HSLink({text, fontSize, stopped, onClick, cooldown, theme}: 
  {text: String, fontSize?: number, stopped?: boolean, onClick: () => void, cooldown: number, theme?: string}) {
  const [hovered, setHovered] = useState(false);
  const [cooled, setCooled] = useState(false);
  const colorset = getColorTheme(theme ? theme : '');
  
  const style = {
    color: cooled || stopped ? '#BBB' : hovered ? `rgb(${colorset[6]},${colorset[7]},${colorset[8]})` : `rgb(${colorset[0]},${colorset[1]},${colorset[2]})`,
    fontSize: fontSize ? fontSize : 16,
    cursor: cooled || stopped ? 'default' : 'pointer',
    transition: 'all 0.5s',
    background: 'transparent',
    border: 'none',
    outline: 'none',
  }
  function clicked() {
    if(!stopped && !cooldown) {
      onClick();
      setCooled(true);
      setTimeout(() => {
        setCooled(false);
      }, cooldown);
    }
  }

  return <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={clicked} style={style}>{text}</button>

}