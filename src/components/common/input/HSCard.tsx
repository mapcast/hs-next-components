import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';

type HSCardProp = {
  children: JSX.Element | string,
  width: number,
  height: number ,
  onClick: () => void,
  theme?: string
}
export const HSCard: React.FC<HSCardProp> = ({children, width, height, onClick, theme}) =>  {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <>
      <div className="hs-card" onClick={onClick}>
        {children}
      </div>
      <style>{`
        .hs-card {
          width: ${width - 10}px;
          height: ${height - 10}px;
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

        .hs-card:hover {
          width: ${width}px;
          height: ${height}px;
          border: 1px groove rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
          box-shadow: 0 0 15px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.7);
        }
        .hs-card:hover:after {
          opacity: 1;
        }
      `}</style>
    </>
    
  )
}