import { getColorTheme } from '@/src/function/common';
import React from 'react';
export function HSParagraph({fontSize, text, theme}: {text: string, fontSize?: number, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return(
    <p style={{paddingBottom: '10px', fontSize : fontSize ? fontSize : 12, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`}}>{text}</p>
  )
}