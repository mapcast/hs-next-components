import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';
export function HSButton({text, onClick, theme}: 
  {text: string|JSX.Element, theme?: string, onClick: () => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <button className="hs-button" onClick={onClick}>
        <div className="hs-button-hoverer"/>
        {text}
      </button>
      <style>{`
        .hs-button {
          font-family: inherit;
          position: relative;
          background: rgb(${colorset[6]},${colorset[7]},${colorset[8]});
          color: rgb(${colorset[9]},${colorset[10]},${colorset[11]});
          border-radius: 5px;
          padding: 4px 16px;
          cursor: pointer;
          border: 1px groove rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5);
          transition: all 0.5s ease;
          outline: none;
          box-shadow: 0 0 15px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.3);
        }

        .hs-button:after {
          content: '»';
          position: absolute;
          opacity: 0;  
          transition: 0.5s;
          right: 10px;
        }

        .hs-button:hover{
          padding-right: 20px;
          padding-left: 12px;
          border: 1px groove rgb(${colorset[0]},${colorset[1]},${colorset[2]});
          box-shadow: 0 0 15px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.7);
        }

        .hs-button-hoverer {
          position: absolute;
          transition: all 0.5s ease;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }

        .hs-button-hoverer:hover {
          background: rgba(255,255,255,0.2);
        }

        .hs-button:hover:after {
          opacity: 1;
        }
      `}</style>
    </root.div>
    
  )
}