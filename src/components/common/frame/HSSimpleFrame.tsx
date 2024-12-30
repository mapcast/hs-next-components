import React from 'react';
import {HSSimpleTitle} from "../item/HSSimpleTitle";

type FrameProp = {
  children: JSX.Element,
  width: number | string,
  height: number | string,
  padding?: number,
  title?: string
}
export const HSSimpleFrame: React.FC<FrameProp> = ({children, width, height, padding, title}) => {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="slight-scroll" style={{boxShadow: '0 0 15px 0 rgba(195,128,250,0.3)', width, height, padding: padding ? padding : 0, overflowY: 'auto'}}>
        {title ?  <HSSimpleTitle level={4} text={title}/> : <></>}
        {children}
      </div>
      <style>{`
         .slight-scroll::-webkit-scrollbar-button {
          height: 0;
          width: 0;
        }
        
        .slight-scroll::-webkit-scrollbar {
          height: 12px;
          overflow: visible;
          width: 12px;
        }
        
        .slight-scroll::-webkit-scrollbar-track {
          background-clip: padding-box;
          border: solid transparent;
          border-width: 0 0 0 4px
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal {
          border-width: 4px 0 0
        }
        
        .slight-scroll::-webkit-scrollbar-track:hover {
          background-color: rgba(195,128,250,.05);
          box-shadow: inset 1px 0 0 rgba(195,128,250,.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:hover {
          box-shadow: inset 0 1px 0 rgba(195,128,250,.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:active {
          background-color: rgba(195,128,250,.05);
          box-shadow: inset 1px 0 0 rgba(195,128,250,.14),inset -1px 0 0 rgba(195,128,250,.07)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:active {
          box-shadow: inset 0 1px 0 rgba(195,128,250,.14),inset 0 -1px 0 rgba(195,128,250,.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(195,128,250,.2);
          background-clip: padding-box;
          border: solid transparent;
          border-width: 1px 1px 1px 6px;
          min-height: 28px;
          padding: 100px 0 0;
          box-shadow: inset 1px 1px 0 rgba(195,128,250,.1),inset 0 -1px 0 rgba(195,128,250,.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:horizontal {
          border-width: 6px 1px 1px;
          padding: 0 0 0 100px;
          box-shadow: inset 1px 1px 0 rgba(195,128,250,.1),inset -1px 0 0 rgba(195,128,250,.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(195,128,250,.4);
          box-shadow: inset 1px 1px 1px rgba(195,128,250,.25)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:active {
          background-color: rgba(195,128,250,.05);
          box-shadow: inset 1px 1px 3px rgba(195,128,250,.35)
        }
        
        .slight-scroll::-webkit-scrollbar-corner {
          background: transparent
        }
      `}</style>
    </div>
  )
}