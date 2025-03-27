import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';

export function HSFloatButton({text, content, onClick, theme}: 
  {text: string, content?: JSX.Element, theme?: string, onClick: () => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <button className="hs-float-button" onClick={onClick}>
        <div className="hs-float-button-shadow">
          {content ? content : text}
        </div>
        <style>{`
          .hs-float-button {
            background: #FFF;
            cursor: pointer;
            border: none;
            transition: all 0.5s ease;
            outline: none;
            border-radius: 30px;
            height: 60px;
            min-width: 60px;
            border: 1px groove rgba(0,0,0,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            box-shadow: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.2) 0px 3px 5px -1px, rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.14) 0px 6px 10px 0px, rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.12) 0px 1px 18px 0px;
          }
          hs-float-button:hover {
            border: 1px groove rgba(0,0,0,0.2);
          }
          .hs-float-button-shadow {
            border-radius: 30px;
            width: 100%;
            height: 100%;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hs-float-button-shadow:hover {
            border-radius: 30px;
            width: 100%;
            height: 60px;
            transition: all 0.5s ease;
            background: rgba(255,255,255,0.1);
            box-shadow: 0 0 25px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.7);
          }
        `}</style>
      </button>
    </root.div>
  )
}