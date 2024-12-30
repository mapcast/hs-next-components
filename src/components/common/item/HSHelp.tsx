import React from 'react';
import { useState } from "react";
import {HSTooltip} from "./HSTooltip";

export function HSHelp({text}: {text: string}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{width: 17, height: 17, textAlign: 'center', position: 'relative'}}>
      <span
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      style={{color: '#C780FA', cursor: 'help'}}>?</span>
      <HSTooltip text={text} active={hovered} width={100} top={3} left={20}/>
    </div>
  )
}