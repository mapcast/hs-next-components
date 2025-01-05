import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useRef, useState } from "react";
import root from 'react-shadow';

export function HSBigInput({fieldName, fieldValue, setFieldValue, imageSrc, width, reduceBottomPadding, theme, type, disabled}: 
  {fieldName: string, fieldValue: string, setFieldValue: Function, imageSrc?: string, width?: number, reduceBottomPadding?: boolean, theme?: string, type?: string, disabled?: boolean}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement|null>(null);
  const colorset = getColorTheme(theme ? theme : '');

  function handleFocus() {
    if(!focused) setFocused(true);
  }

  function handleBlur() {
    if(fieldValue === '') setFocused(false);
  }

  function clickPlaceholder() {
    if(ref.current != null) ref.current.focus();
  }

  return (
    <root.div>
      <div className={`big-input-wrap ${reduceBottomPadding ? 'reduce-padding' : ''}`} style={{width: width ? width : 400, position: 'relative'}}>
        {imageSrc ? 
        <div className={`big-input-image-wrap ${reduceBottomPadding ? 'reduce-padding' : ''}`}>
          <img src={imageSrc} className="big-input-image"/>  
        </div> : <></>}
        <div className={`big-input-input-wrap ${reduceBottomPadding ? 'reduce-padding' : ''}`}>
          <span onClick={clickPlaceholder} className={`big-input-placeholder ${focused || fieldValue.length > 0 ? 'focused' : ''}`}>{fieldName}</span>
          <input ref={ref} type={type ? type : 'text'} className="big-input" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} disabled={disabled ? disabled : false}/>
        </div>
        <style>{`
          input {
            outline: none;
            color: #888;
          }
          .big-input-wrap {
            height: 60px; 
            display: flex;
            border-bottom: 2px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]});
          }
          .big-input-wrap.reduce-padding {
            height: 50px;
          }
          .big-input-image-wrap {
            display: flex; 
            justify-content: center;
            align-items: end; 
            width: 35px;
            padding-bottom: 20px;
          }
          .big-input-image-wrap.reduce-padding {
            padding-bottom: 10px;
          }
          .big-input-image {
            width: 20px;
            height: 20px;
          }
          .big-input-input-wrap {
            flex: 1; 
            padding: 20px 0;
            position: relative;
          }
          .big-input-input-wrap.reduce-padding {
            padding-bottom: 10px;
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