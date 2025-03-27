import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';

export function HSBigButton({text, onClick, theme}: 
  {text: string, theme?: string, onClick: () => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <button className="hs-big-button"
      onClick={onClick}>
        {text}
      </button>
      <style>{`
        .hs-big-button {
          font-family: inherit;
          position: relative;
          background: rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
          color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
          border-radius: 24px;
          font-size: 1rem;
          padding: 16px 24px;
          cursor: pointer;
          border: 1px groove rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.5);
          transition: all 0.5s ease;
          outline: none;
          box-shadow: 0 0 15px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.3);
        }

        .hs-big-button:hover{
          border: 1px groove rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
          box-shadow: 0 0 15px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.7);
          padding: 18px 27px;
        }
        .hs-big-button:hover:after {
          opacity: 1;
        }
      `}</style>
    </root.div>
    
  )
}