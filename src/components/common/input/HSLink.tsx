import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useState } from "react"
export function HSLink({text, fontSize, stopped, onClick, cooldown, theme}: 
  {text: String, fontSize?: number, stopped?: boolean, onClick: () => void, cooldown: number, theme?: string}) {
  const [hovered, setHovered] = useState(false);
  const [cooled, setCooled] = useState(false);
  const colorset = getColorTheme(theme ? theme : '');
  
  const style = {
    color: cooled || stopped ? '#BBB' : hovered ? `rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue})` : `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
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