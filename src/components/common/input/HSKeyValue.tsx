import { getColorTheme } from '@/src/function/common';
import React from 'react';
export function HSKeyValue({name, value, theme, selected, onClick, width, height, fontSize, keyRatio}: 
  {name: string|number|JSX.Element, value: string|number|JSX.Element, theme?: string, selected?: boolean, onClick?: () => void
  width?: number, height?: number, fontSize?: number, keyRatio?:number}) {
  const colorset = getColorTheme(theme ? theme : '');
  
  return (
    <div
    style={{
      cursor: 'pointer',
      width: width ? width : '100%', 
      height: height ? height: '100%', 
      fontSize: fontSize ? fontSize : 10, 
      display: 'flex',
      alignItems: 'center'
    }} onClick={onClick}>
      <div style={{width: `${keyRatio ? keyRatio : 50}%`}}>
        <div style={{
          height: fontSize ? fontSize + 6 : 16,
          borderRight: `1px solid ${selected ? `rgb(${colorset[0]},${colorset[1]},${colorset[2]})` : `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`}`
        }}>
          {name}
        </div>
      </div>
      <div className="ellipse" style={{
        paddingLeft: 10,
        paddingRight: 5,
        flexGrow: 1,
      }}>{value}</div>
    </div>
  )
}