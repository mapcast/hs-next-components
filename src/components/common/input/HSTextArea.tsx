import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useRef, useState } from "react";

export function HSTextArea({fieldName, fieldValue, setFieldValue, theme, width, height}: 
  {fieldName: string, fieldValue: string, setFieldValue?: Function, theme?: string, width?: number, height?:number}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement|null>(null);
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

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if(setFieldValue) {
      if(event.key === 'Tab') {
        event.preventDefault();
        const textarea = event.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const textBefore = fieldValue.substring(0, cursorPos);
        const textAfter = fieldValue.substring(cursorPos, fieldValue.length);
        setFieldValue(textBefore + "\t" + textAfter);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = cursorPos + 1;
        }, 0);
      } else if(event.key === 'Enter') {
        event.preventDefault();
        const textarea = event.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const textBefore = fieldValue.substring(0, cursorPos);
        const splitted = textBefore.split("\n");
        const last = splitted[splitted.length - 1];
        const matcher = last.match(/\t/g );
        let tabs = "";
        let count = 0;
        if(matcher != null) {
          count = matcher.length;
        }
        for(let i = 0; i < count; i ++) tabs = tabs.concat("\t");
  
        const textAfter = fieldValue.substring(cursorPos, fieldValue.length);
        setFieldValue(textBefore + `\n${tabs}` + textAfter);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = cursorPos + 1 + count;
          textarea.scrollTop = 14 * splitted.length + 42;
        }, 0);
      }
    }
    
  }

  return (
    <div className="hs-textarea-wrap" style={{width: width ? width : '100%', height: height ? height: '100%', position: 'relative'}}>
      <div className="hs-textarea-input-wrap">
        <div onClick={clickPlaceholder} className="hs-textarea-title">{fieldName}</div>
        <textarea className="hs-textarea slight-scroll" ref={ref} spellCheck="false" value={fieldValue} 
        onChange={(e) => setFieldValue ? setFieldValue(e.target.value) : {}} onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} disabled={!setFieldValue ? true : false}/>
      </div>
      <style>{`
        .hs-textarea-wrap {
          display: flex;
          background: transparent;
          border: 2px groove rgb(${colorset[6]},${colorset[7]},${colorset[8]});
        }
        .hs-textarea-input-wrap {
          flex: 1; 
          padding: 15px 0 2px 0;
          position: relative;
          box-shadow: 0 0 15px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.3);
        }
        .hs-textarea {
          border: none;
          width: 100%;
          height: 100%;
          resize: none;
          outline: none;
          font-size: 12px;
          color: rgb(${colorset[9]},${colorset[10]},${colorset[11]});
          padding: 0 5px 0 5px;
          background: transparent;
          tab-size: 2;
        }
        .hs-textarea-title {
          position: absolute;
          color: rgb(${colorset[3]},${colorset[4]},${colorset[5]});
          font-size: 9px;
          top: 0;
          left: 0;
          padding: 2px 2px 0 2px;
          width: 100%;
          height: 10px;
        }

        .slight-scroll::-webkit-scrollbar-button {
          height: 0;
          width: 0;
        }
        
        .slight-scroll::-webkit-scrollbar {
          height: 13px;
          overflow: visible;
          width: 13px;
        }
        
        .slight-scroll::-webkit-scrollbar-track {
          background-clip: padding-box;
          border: solid transparent;
          border-width: 0 0 0 4px
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal {
          border-width: 4px 0 0
        }
        
        .slight-scroll::-webkit-scrollbar-track:hover {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.05);
          box-shadow: inset 1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:hover {
          box-shadow: inset 0 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:active {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.05);
          box-shadow: inset 1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.14),inset -1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:active {
          box-shadow: inset 0 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.14),inset 0 -1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.2);
          background-clip: padding-box;
          border: solid transparent;
          border-width: 1px 1px 1px 6px;
          min-height: 28px;
          padding: 100px 0 0;
          box-shadow: inset 1px 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1),inset 0 -1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:horizontal {
          border-width: 6px 1px 1px;
          padding: 0 0 0 100px;
          box-shadow: inset 1px 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1),inset -1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.4);
          box-shadow: inset 1px 1px 1px rgba(${colorset[0]},${colorset[1]},${colorset[2]},.25)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:active {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.05);
          box-shadow: inset 1px 1px 3px rgba(${colorset[0]},${colorset[1]},${colorset[2]},.35)
        }
        
        .slight-scroll::-webkit-scrollbar-corner {
          background: transparent
        }
      `}</style>
    </div>
  )
}