import { getColorTheme } from '@/src/function/common';
import React from 'react';
export default function DoubleArrow({rotate, theme}: {rotate?: number, theme?: string}) {
  //min = 24px
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    style={{
      fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
      transform: `rotate(${rotate ? `${rotate}deg` : '0'})`
    }}>
      <path d="m12 6.414 7.293 7.293 1.414-1.414L12 3.586l-8.707 8.707 1.414 1.414L12 6.414z"/><path d="m3.293 18.293 1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586l-8.707 8.707z"/>
    </svg>
  );
}
