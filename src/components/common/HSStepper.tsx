'use client'

import React from "react"
import SimpleArrow from "./item/SimpleArrow"

export function HSStepper({items, step, setStep}: {items: HSItem[], step: string, setStep: (step: string) => void}) {
  return (
    <div className="hs-stepper">
      {items.map((item: HSItem, index: number) =>
      <React.Fragment key={index}>
        {index > 0 ? 
        <div style={{height: '100%', width: 45, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <SimpleArrow/>
        </div> : <></>} 
        <div className="hs-stepper-step" key={index} onClick={() => setStep(item.raw)}>
          <span style={{fontWeight: item.raw === step ? 800 : 400, fontSize: 14}}>{`Step ${index}`}</span><br/>
          <span style={{fontSize: 12}}>{item.display}</span>
        </div>
      </React.Fragment>
      )}
      <style jsx>{`
        .hs-stepper {
          display: flex;
          height: 38px;
          color: #C780FA;
        }
        .hs-stepper-step {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hs-stepper-step:hover {
          color: #E7A0FA;
        }
      `}</style>
    </div>
  )
}