import React from 'react';
import {HSProgressBar} from "./HSProgressBar";
import { getColorTheme } from '@/src/function/common';

export function HSPicketProgressBar({text, value, picket, bigPicket, theme}: 
  {text: string, value: number, picket: string, bigPicket?: boolean, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={{display: 'grid', gridTemplateRows: `${bigPicket ? 32 : 25}px 1fr`, height: '100%'}}>
      <div style={{display: 'flex', position: 'relative', alignItems: 'flex-end'}}>
        <div style={{position: 'absolute', left: value < 50 ? `${value}%` : 'auto', right: value >= 50 ? `${100 - value}%` : 'auto'}}>
          <div style={{borderRadius: value < 50 ? '2px 2px 2px 0' : '2px 2px 0 2px', textAlign: 'center', display: 'flex', width: 'fit-content',fontSize: 10, background: `rgb(${colorset[0]},${colorset[1]},${colorset[2]})`, color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`, padding: bigPicket ? '4px 12px' : '2px 8px'}}><span>{picket}</span></div>
          {value < 50 ?
          <div style={{height: 2, width: 2, borderTop: `2px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]})`,borderBottom: '2px solid transparent',borderLeft: `2px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]})`,borderRight: '2px solid transparent'}}/>
          :
          <div style={{display: 'flex', justifyContent: 'right', width: '100%'}}>
            <div style={{height: 2, width: 2, borderTop: `2px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]})`, borderBottom: '2px solid transparent',borderLeft: '2px solid transparent',borderRight: `2px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]})`}}/>
          </div>
          }
        </div>
      </div>
      <div style={{width: '100%', background: '#FFF'}}>
        <HSProgressBar theme={theme} text={text} value={value}/>
      </div>
    </div>
  )
}