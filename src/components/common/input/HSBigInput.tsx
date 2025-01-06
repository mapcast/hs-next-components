import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useRef, useState } from "react";
import root from 'react-shadow';

export function HSBigInput({name, value, setValue, imageSrc, width, theme, type}: 
  {name: string, value: string, setValue?: (val: string) => void, imageSrc?: string, width?: number, theme?: string, type?: string}) {
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

  return (
    <root.div>
      <div className={`big-input-wrap reduce-padding}`} style={{width: width ? width : 400, position: 'relative'}}>
        {imageSrc ? 
        <div className={`big-input-image-wrap reduce-padding`}>
          <img src={imageSrc} className="big-input-image"/>  
        </div> : <></>}
        <div className={`big-input-input-wrap reduce-padding}`}>
          <span onClick={clickPlaceholder} className={`big-input-placeholder ${focused || value.length > 0 ? 'focused' : ''}`}>{name}</span>
          <input ref={ref} type={type ? type : 'text'} className="big-input" value={value} disabled={setValue ? false : true} onChange={(e) => setValue ? setValue(e.target.value) : {}} onFocus={handleFocus} onBlur={handleBlur}/>
        </div>
        <style>{`
          input {
            outline: none;
            color: #888;
          }
          .big-input-wrap {
             height: 50px;
            display: flex;
            border-bottom: 2px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]});
          }
          .big-input-image-wrap {
            display: flex; 
            justify-content: center;
            align-items: end; 
            width: 35px;
            padding-bottom: 10px;
          }
          .big-input-image {
            width: 20px;
            height: 20px;
          }
          .big-input-input-wrap {
            flex: 1; 
            padding: 20px 0 10px 0;
            position: relative;
          }
          .big-input {
            background: transparent;
            border: none;
            width: calc(100% - 17px);
            color: rgb(${colorset[9]},${colorset[10]},${colorset[11]});
          }
          .big-input-placeholder {
            position: absolute;
            color: rgb(${colorset[0]},${colorset[1]},${colorset[2]});
            font-size: 12px;
            top: 24px;
            left: 2px;
            transition: all 0.3s ease;
          }
          .big-input-placeholder.focused {
            font-size: 9px;
            top: 10px;
          }
        `}</style>
      </div>
    </root.div>
  )
}