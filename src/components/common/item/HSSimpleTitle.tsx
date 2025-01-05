import { getColorTheme } from '@/src/function/common';
import React from 'react';
export function HSSimpleTitle({level, text, theme}: {level: number, text: string, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return(
    <>
      {level === 1 ? <h1 style={{fontSize: 32, paddingBottom: '10px', fontWeight: 800, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`, textTransform: 'capitalize'}}>{text}</h1> :
      level === 2 ? <h2 style={{fontSize: 28, paddingBottom: '10px', fontWeight: 800, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`, textTransform: 'capitalize'}}>{text}</h2> :
      level === 3 ? <h3 style={{fontSize: 24, paddingBottom: '10px', fontWeight: 400, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`, textTransform: 'capitalize'}}>{text}</h3> :
      level === 4 ? <h4 style={{fontSize: 18, paddingBottom: '10px', fontWeight: 800, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`, textTransform: 'capitalize'}}>{text}</h4> :
      level === 5 ? <h5 style={{fontSize: 16, paddingBottom: '10px', fontWeight: 400, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`, textTransform: 'capitalize'}}>{text}</h5> : <></>}
    </>
  )
}