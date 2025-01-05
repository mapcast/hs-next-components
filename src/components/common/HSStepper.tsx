'use client'

import React from "react"
import SimpleArrow from "./item/SimpleArrow"
import { getColorTheme } from "@/src/function/common";

export function HSStepper({items, step, setStep, theme}: {items: HSItem[], step: string, setStep: (step: string) => void, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  
  return (
    <div className="hs-stepper">
      {items.map((item: HSItem, index: number) =>
      <React.Fragment key={index}>
        {index > 0 ? 
        <div style={{height: '100%', width: 45, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <SimpleArrow theme={theme}/>
        </div> : <></>} 
        <div className="hs-stepper-step" key={index} onClick={() => setStep(item.raw)}>
          <span style={{fontWeight: item.raw === step ? 800 : 400, fontSize: 14}}>{`Step ${index}`}</span><br/>
          <span style={{fontSize: 12}}>{item.display}</span>
        </div>
      </React.Fragment>
      )}
      <style>{`
        .hs-stepper {
          display: flex;
          height: 38px;
          color: rgb(${colorset[0]},${colorset[1]},${colorset[2]});
        }
        .hs-stepper-step {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hs-stepper-step:hover {
          color: rgb(${colorset[6]},${colorset[7]},${colorset[8]});
        }
      `}</style>
    </div>
  )
}