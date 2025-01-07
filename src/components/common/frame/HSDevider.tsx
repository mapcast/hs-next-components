import { getColorTheme } from '@/src/function/common';
import React from 'react';

export function HSDevider({size, horizontal, theme}: {size: number, horizontal?: boolean, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={{width: horizontal ? size : '100%', height: horizontal ? '100%' : size}} className={`${horizontal ? 'hs-devider-horizontal' : 'hs-devider-vertical'}`}>
      <style>{`
        .hs-devider-vertical {
          background-image: linear-gradient(to right, rgb(${colorset[9]},${colorset[10]},${colorset[11]}), rgb(${colorset[6]},${colorset[7]},${colorset[8]}));
        }
        .hs-devider-horizontal {
          background-image: linear-gradient(to bottom, rgb(${colorset[9]},${colorset[10]},${colorset[11]}), rgb(${colorset[6]},${colorset[7]},${colorset[8]}));
        }
      `}</style>
    </div>
  )
}