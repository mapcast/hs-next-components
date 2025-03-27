'use client'
import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useRef, useState } from 'react';
import root from 'react-shadow';

export function HSInput({type, value, setValue, width, theme, name, pushEnter}: 
  {type: 'text'|'number', value: string, setValue?: (val: string) => void,
    width?: number, theme?: string, disabled?: boolean, name?: string, pushEnter?: () => void}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement|null>(null);
  const colorset = getColorTheme(theme ? theme : '');

  function handleFocus() {
    if(!focused) setFocused(true);
  }

  function handleBlur() {
    if(value === '') setFocused(false);
  }

  function clickPlaceholder() {
    if(ref.current != null) ref.current.focus();
  }

  function checkPushEnter(e: React.KeyboardEvent) {
    if(e.key.toLowerCase() === 'enter') {
      if(pushEnter) pushEnter();
    }
  } 

  return (
    <root.div>
      <div style={{position: 'relative', width: width ? width : '100%', borderBottom: `1px solid rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}`, paddingTop: 10, paddingBottom: 2}}>
        {name ? <span onClick={clickPlaceholder} className={`hs-input-placeholder ${focused || value.length > 0 ? 'focused' : ''}`}>
          {name}
        </span> : <></>}
        <input ref={ref} type={type} value={value} 
        style={{border: 'none', outline: 'none', background: 'transparent', color: '#8740BA'}} 
        onKeyDown={checkPushEnter} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e: any) => setValue ? setValue(e.target.value) : {}}
        disabled={setValue ? false : true}/>
      </div>
      <style>{`
        .hs-input-placeholder {
          position: absolute;
          color: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
          font-size: 12px;
          top: 10px;
          left: 2px;
          transition: all 0.3s ease;
        }
        .hs-input-placeholder.focused {
          font-size: 10px;
          top: 0;
        }
      `}</style>
    </root.div>
  )
  
}