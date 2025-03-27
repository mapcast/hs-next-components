import { getColorTheme } from '@/src/function/common';
import React from 'react';
export function HSTooltip({text, active, width, left, top, theme}: {text: string, active: boolean, width: number, left: number, top: number, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={
      {
        fontSize: 10, 
        padding: 3, 
        borderRadius: 3, 
        position: 'absolute', 
        transition: 'all 0.3s ease', 
        background: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`, 
        color: '#FFF', 
        overflow: 'auto',
        left, top, width,
        cursor: "text",
        display: active ? 'block' : 'none'
      }}>
      <div style={{padding: '0 5px'}}>{text}</div>
    </div>
  )
}