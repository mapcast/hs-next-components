import { getColorTheme } from '@/src/function/common';
import React from 'react';

export function HSDevider({size, horizontal, theme}: {size: number, horizontal?: boolean, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={{width: horizontal ? size : '100%', height: horizontal ? '100%' : size}} className={`${horizontal ? 'hs-devider-horizontal' : 'hs-devider-vertical'}`}>
      <style>{`
        .hs-devider-vertical {
          background-image: linear-gradient(to right, rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.5) 30%, rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.2) 100%);
        }
        .hs-devider-horizontal {
          background-image: linear-gradient(to bottom, rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.5) 30%, rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}, 0.2) 100%);
        }
      `}</style>
    </div>
  )
}