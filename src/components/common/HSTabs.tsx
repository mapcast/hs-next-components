'use client';
import { getColorTheme } from '@/src/function/common';
import React from 'react';

import root from 'react-shadow';

export function HSTabs({items, selected, clickTab, theme}: {items: HSItem[], selected: string, theme?: string, clickTab: (tab: string) => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <div style={{display: 'flex', height: 26}}>
        {items.map((item: HSItem, index: number) =>
        <div className={`hs-tab ${selected === item.raw ? 'active' : ''}`} key={index} onClick={() => clickTab(item.raw)}>
          <div style={{paddingLeft: 2}}>{item.display}</div>
        </div>
        )}
        <style>{`
          .hs-tab {
            cursor: pointer;
            border: 1px groove rgb(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue});
            border-bottom: 0;
            text-align: left;
            width: 120px;
            margin-left: 5px;
            border-radius: 5px 5px 0 0;
            font-size: 12px;
            padding-left: 5px;
            padding-top: 5px;
            box-shadow: 0 0 25px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.3);
            box-sizing: border-box;
            background: rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
            color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
            transition: all 0.2s ease;
          }
          .hs-tab.active {
            border-bottom: 2px solid rgb(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue});
            box-shadow: 0 0 25px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.7);
          }
          .hs-tab:hover {
            border-bottom: 2px solid rgb(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue});
            box-shadow: 0 0 25px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.7);
          }
          .hs-tab:first-child {
            margin-left: 0;
          }
          
        `}</style>
      </div>
    </root.div>
  )
}