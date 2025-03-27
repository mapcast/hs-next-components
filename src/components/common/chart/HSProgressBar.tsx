import { getColorTheme } from '@/src/function/common';
import React from 'react';
export function HSProgressBar({text, value, textTransform, theme}: {text: string, value: number, textTransform?: string, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={{width: '100%', height: '100%', background: `rgba(${colorset.light.red},${colorset.light.green},${colorset.light.blue},0.3)`, position: 'relative'}}>
      <div style={{position: 'absolute', right: 7, color: `rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue})`, fontSize: '0.7rem', fontWeight: 100, height: '100%', display: 'flex', alignItems: 'center', transform: textTransform}}>
        {text}
      </div>
      <div style={{width: `${value}%`, transition: '0.2s all ease', height: '100%', 
      backgroundImage: `linear-gradient(to right, rgba(${colorset.light.red},${colorset.light.green},${colorset.light.blue},0.2), rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue}))`}}/>
    </div>
  );
}
