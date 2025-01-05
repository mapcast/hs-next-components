import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';

export function HSRadio({selected, value, text, theme, onClick}: {selected: string, value: string, text?: string, theme?: string, onClick: (val: string) => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <div style={{display: 'inline-block', padding: '2px 0'}}>
        <label style={{display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer'}}>
          <input type="radio" value={value} checked={selected === value} onChange={() => onClick(value)} style={{display:'none'}}/>
          <div style={
            {
              width: 16, 
              height: 16, 
              borderRadius: '50%', 
              border: selected === value ? '2px solid rgba(255,255,255,0.2)' : '2px solid rgba(0,0,0,0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: selected === value ? `0 0 8px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5)` : 'none',
              background: selected === value ? `rgb(${colorset[0]},${colorset[1]},${colorset[2]})` : '#FFF',
            }
          }>
            <div style={{width: '8px', aspectRatio: '1/1', background: '#FFF', borderRadius: '50%'}}/>
          </div>
          <span style={{color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`}}>{text}</span>
        </label>
      </div>
    </root.div>
  )
}