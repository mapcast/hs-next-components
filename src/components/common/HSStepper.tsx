'use client'

import React from "react"
import SimpleArrow from "./item/SimpleArrow"
import { getColorTheme } from "@/src/function/common";

export function HSStepper({items, selected, clickTab, theme}: {items: HSItem[], selected: string, theme?: string, clickTab: (tab: string) => void}) {
  const colorset = getColorTheme(theme ? theme : '');
  
  return (
    <div className="hs-stepper">
      {items.map((item: HSItem, index: number) =>
      <React.Fragment key={index}>
        {index > 0 ? 
        <div style={{height: '100%', width: 45, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <SimpleArrow theme={theme}/>
        </div> : <></>} 
        <div className={`hs-stepper-step ${item.raw === selected ? 'focused' : ''}`} key={index} onClick={() => clickTab(item.raw)}>
          <span style={{fontSize: 14}}>{`Step ${index + 1}`}</span><br/>
          <span style={{fontSize: 12}}>{item.display}</span>
        </div>
      </React.Fragment>
      )}
      <style>{`
        .hs-stepper {
          display: flex;
          height: 38px;
          color: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
        }
        .hs-stepper-step {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hs-stepper-step:hover {
          color: rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
        }
        .hs-stepper-step.focused {
          color: rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
        }
      `}</style>
    </div>
  )
}