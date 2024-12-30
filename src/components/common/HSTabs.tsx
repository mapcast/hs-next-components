'use client';
import React from 'react';

import root from 'react-shadow';

export function HSTabs({items, selected, clickTab}: {items: HSItem[], selected: string, clickTab: (tab: string) => void}) {
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
            border: 1px groove #A760DA;
            border-bottom: 0;
            text-align: left;
            width: 120px;
            margin-left: 5px;
            border-radius: 5px 5px 0 0;
            font-size: 12px;
            padding-left: 5px;
            padding-top: 5px;
            box-shadow: 0 0 25px 0 rgba(195,128,250,0.3);
            box-sizing: border-box;
            background: #E3ACF9;
            color: #8740BA;
            transition: all 0.2s ease;
          }
          .hs-tab.active {
            border-bottom: 2px solid #A760DA;
            box-shadow: 0 0 25px 0 rgba(195,128,250,0.7);
          }
          .hs-tab:hover {
            border-bottom: 2px solid #A760DA;
            box-shadow: 0 0 25px 0 rgba(195,128,250,0.7);
          }
          .hs-tab:first-child {
            margin-left: 0;
          }
          
        `}</style>
      </div>
    </root.div>
  )
}