import { getColorTheme } from '@/src/function/common';
import React from 'react';
export default function SimpleArrow({rotate, theme}: {rotate?: number, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    style={{
      fill: `rgb(${colorset[0]},${colorset[1]},${colorset[2]})`,
      transform: `rotate(${rotate ? `${rotate}deg` : '0'})`
    }}>
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
    </svg>
  );
}
