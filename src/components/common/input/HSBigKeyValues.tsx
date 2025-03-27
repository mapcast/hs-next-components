import { getColorTheme } from "@/src/function/common";
import React from 'react';

export function HSBigKeyValues({name, values, width, theme}:
  {name: string, values: string[], width?: string | number, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div className="hs-kv" style={{width: width ? width : 'auto', borderLeft: `2px solid rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`}}>
      <div className="hs-kv-key">
        <h5 style={{fontSize: 16, color: `rgb(${colorset.typo.red}, ${colorset.typo.green}, ${colorset.typo.blue})`}}>{name}</h5>
      </div>
      <div className="hs-kv-value">
        <div>
          {values.map((value: string, index: number) => <p key={index} style={{fontSize: 14, color: `rgba(${colorset.typo.red}, ${colorset.typo.green}, ${colorset.typo.blue}, 0.7)`}}>{value}</p>)}
        </div>
      </div>
    </div>
  )
}