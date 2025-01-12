import React from 'react';
import {HSSimpleTitle} from "../item/HSSimpleTitle";
import { getColorTheme } from '@/src/function/common';
import { HSLink } from '../input/HSLink';

type FrameProp = {
  children: JSX.Element,
  width: number | string,
  height: number | string,
  padding?: number,
  title?: string,
  theme?: string,
  clickLink?: () => void
}
export const HSSimpleFrame: React.FC<FrameProp> = ({children, width, height, padding, title, theme, clickLink}) => {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="slight-scroll" style={{boxShadow: `0 0 15px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.3)`, width, height, padding: padding ? padding : 0, overflowY: 'auto'}}>
        {title ?  <div style={{display: 'flex', gap: 10}}><HSSimpleTitle theme={theme} level={4} text={title}/>{clickLink ? <div style={{paddingBottom: 10, display: 'flex', alignItems: 'center'}}><HSLink theme={theme} text="detail" onClick={clickLink} cooldown={0}/></div> : <></>}</div> : <></>}
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
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.05);
          box-shadow: inset 1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:hover {
          box-shadow: inset 0 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1)
        }
        
        .slight-scroll::-webkit-scrollbar-track:active {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.05);
          box-shadow: inset 1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.14),inset -1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-track:horizontal:active {
          box-shadow: inset 0 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.14),inset 0 -1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.2);
          background-clip: padding-box;
          border: solid transparent;
          border-width: 1px 1px 1px 6px;
          min-height: 28px;
          padding: 100px 0 0;
          box-shadow: inset 1px 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1),inset 0 -1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:horizontal {
          border-width: 6px 1px 1px;
          padding: 0 0 0 100px;
          box-shadow: inset 1px 1px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.1),inset -1px 0 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},.07)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.4);
          box-shadow: inset 1px 1px 1px rgba(${colorset[0]},${colorset[1]},${colorset[2]},.25)
        }
        
        .slight-scroll::-webkit-scrollbar-thumb:active {
          background-color: rgba(${colorset[0]},${colorset[1]},${colorset[2]},.05);
          box-shadow: inset 1px 1px 3px rgba(${colorset[0]},${colorset[1]},${colorset[2]},.35)
        }
        
        .slight-scroll::-webkit-scrollbar-corner {
          background: transparent
        }
      `}</style>
    </div>
  )
}