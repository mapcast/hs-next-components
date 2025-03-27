import { getColorTheme } from "@/src/function/common";
import { useState } from "react"
import React from 'react';

export function HSHeader({title, items, theme, openedHeight}: 
  {title: Clickable, items: Clickable[], theme?: string, openedHeight?: number}) {
  const [opened, setOpened] = useState(false);
  const colorset = getColorTheme(theme ? theme : '');

  function clickWithClose(item: Clickable) {
    item.onClick();
    setOpened(false);
  }

  return(
    <header className="hs-header" style={
      {background: `rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue})`,
      borderBottom: `2px solid rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`}}>
      <div className="hs-header-wrapper">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div onClick={title.onClick} className="hs-header-title">
            {title.display}
          </div>
        </div>
        <div className="hs-header-items">
          {items.map((item: Clickable, index: number) => 
          <div key={index} onClick={item.onClick} className="hs-header-item">
            {item.display}
          </div>)}
        </div>
        <div className="hs-header-items-opener">
          <div onClick={() => setOpened(!opened)} className="hs-header-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            style={{
              fill: `rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue})`,
            }}>
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>      
            </svg>
          </div>
        </div>
      </div>
      <div className={`hs-header-opened-items ${opened ? 'opened' : 'closed'}`}>
        {items.map((item: Clickable, index: number) => 
        <div key={index} onClick={() => clickWithClose(item)} className="hs-header-opened-item">
          {item.display}
        </div>)}
      </div>
      <style>{`
      .hs-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        z-index: 9999;
        color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
      }
      .hs-header-wrapper {
        width: 100%;
        height: 57px;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
      }
      .hs-header-title {
        cursor: pointer;
        font-weight: 800;
        font-size: 1.2rem;
        margin-left: 10px;
      }
      .hs-header-item {
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .hs-header-item:hover {
        color: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
      }
      
      @media (min-width: 865px) {
        .hs-header {
          max-height: 57px;
        }
        .hs-header-items {
          display: flex;
          font-size: 1rem;
        }
        .hs-header-items-opener {
          display: none;
        }
        .hs-header-opened-items {
          display: none;
        }
      }
      @media (max-width: 865px) {
        .hs-header-items {
          display: none;
        }
        .hs-header-items-opener {
          display: flex;
        }
        .hs-header-opened-items {
          transition: all 0.5s ease;
          overflow: hidden;
          width: 100%;
          padding-left: 20px;
        }
        .hs-header-opened-items.closed {
          height: 0vh;
        }
        .hs-header-opened-items.opened {
          height: ${openedHeight ? `${openedHeight}px` : '100vh'};
        }
        .hs-header-opened-item {
          margin-top: 20px;
          font-size: 1.2rem;
          cursor: pointer;  
          transition: all 0.3s ease;
        }
        .hs-header-opened-item:hover {
          color: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
        }
      }
      `}</style>
    </header>
  )
}