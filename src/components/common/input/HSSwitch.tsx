import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';
export function HSSwitch({value, checked, theme, text, onChange}: {value: string, checked: boolean, theme?: string, text?: string, onChange: () => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <div style={{display: 'inline-block', padding: '2px 0'}}>
        <label style={{display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer'}}>
          <input type="checkbox" value={value} checked={checked} onChange={onChange} style={{display:'none'}}/>
          <div style={{width: 30, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <div style={{borderRadius: '30%', width: 20, height: 10, background: checked ? `rgb(${colorset[6]},${colorset[7]},${colorset[8]})` : '#888', boxShadow: checked ? `0 0 8px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5)` : 'none'}}/>
            <div className={`switch-handle-wrap ${checked ? 'checked' : ''}`}>
              <div className={`switch-handle`}/>
            </div>
          </div>
          <span style={{color: `rgb(${colorset[9]},${colorset[10]},${colorset[11]})`}}>{text}</span>
        </label>
        <style>{`
          .switch-handle-wrap {
            position: absolute;
            padding-left: 14px;
            left: 0;
            transition: all 0.1s ease;
          }
          .switch-handle-wrap.checked {
            padding-left: 3px;
          }
          .switch-handle {
            border-radius: 50%; 
            width: 12px; 
            height: 12px;
            background: rgb(${colorset[0]},${colorset[1]},${colorset[2]});
            border: 1px solid rgb(${colorset[3]},${colorset[4]},${colorset[5]});
            box-shadow: 0 0 15px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.3);
          }
        `}</style>
      </div>
    </root.div>
  )
}