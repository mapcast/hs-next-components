import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useRef, useState } from "react";

export function HSTextArea({name, value, setValue, theme, width, height}: 
  {name: string, value: string, setValue?: Function, theme?: string, width?: number, height?:number}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement|null>(null);
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

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if(setValue) {
      if(event.key === 'Tab') {
        event.preventDefault();
        const textarea = event.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const textBefore = value.substring(0, cursorPos);
        const textAfter = value.substring(cursorPos, value.length);
        setValue(textBefore + "\t" + textAfter);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = cursorPos + 1;
        }, 0);
      } else if(event.key === 'Enter') {
        event.preventDefault();
        const textarea = event.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const textBefore = value.substring(0, cursorPos);
        const splitted = textBefore.split("\n");
        const last = splitted[splitted.length - 1];
        const matcher = last.match(/\t/g );
        let tabs = "";
        let count = 0;
        if(matcher != null) {
          count = matcher.length;
        }
        for(let i = 0; i < count; i ++) tabs = tabs.concat("\t");
  
        const textAfter = value.substring(cursorPos, value.length);
        setValue(textBefore + `\n${tabs}` + textAfter);
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
        <div onClick={clickPlaceholder} className="hs-textarea-title">{name}</div>
        <textarea className="hs-textarea slight-scroll" ref={ref} spellCheck="false" value={value} 
        onChange={(e) => setValue ? setValue(e.target.value) : {}} onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} disabled={!setValue ? true : false}/>
      </div>
      <style>{`
        .hs-textarea-wrap {
          display: flex;
          background: transparent;
          border: 2px groove rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
        }
        .hs-textarea-input-wrap {
          flex: 1; 
          padding: 15px 0 2px 0;
          position: relative;
          box-shadow: 0 0 15px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.3);
        }
        .hs-textarea {
          border: none;
          width: 100%;
          height: 100%;
          resize: none;
          outline: none;
          font-size: 12px;
          color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
          padding: 0 5px 0 5px;
          background: transparent;
          tab-size: 2;
        }
        .hs-textarea-title {
          position: absolute;
          color: rgb(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue});
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
          background-color: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.05);
          box-shadow: inset 1px 0 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:hover {
          box-shadow: inset 0 1px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:active {
          background-color: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.05);
          box-shadow: inset 1px 0 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.14),inset -1px 0 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:active {
          box-shadow: inset 0 1px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.14),inset 0 -1px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.2);
          background-clip: padding-box;
          border: solid transparent;
          border-width: 1px 1px 1px 6px;
          min-height: 28px;
          padding: 100px 0 0;
          box-shadow: inset 1px 1px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.1),inset 0 -1px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:horizontal {
          border-width: 6px 1px 1px;
          padding: 0 0 0 100px;
          box-shadow: inset 1px 1px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.1),inset -1px 0 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.4);
          box-shadow: inset 1px 1px 1px rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.25)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:active {
          background-color: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.05);
          box-shadow: inset 1px 1px 3px rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},.35)
        }
        
        .slight-scroll::-webkit-scrollbar-corner {
          background: transparent
        }
      `}</style>
    </div>
  )
}