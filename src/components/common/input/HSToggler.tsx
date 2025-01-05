'use client';
import { getColorTheme } from '@/src/function/common';
import React from 'react';
import {useState} from 'react';
import root from 'react-shadow';
function HsTogglerButton({item, theme}: {item: Toggleable, theme?: string}) {
  const [active, setActive] = useState(item.default);
  const colorset = getColorTheme(theme ? theme : '');
  function toggle() {
    if(active) {
      item.off();
      setActive(false);
    } else {
      item.on();
      setActive(true);
    }
  }
  return (
    <button className={`hs-toggle-button ${active ? 'active' : ''}`} onClick={toggle}>
      {item.display}
      <style>{`
        .hs-toggle-button:first-child {
          border-left: none;
        }
        .hs-toggle-button {
          width: 100%;
          height: 100%;
          padding: 5px 0;
          text-align: center;
          cursor: pointer;
          border: none;
          transition: all 0.5s ease;
          outline: none;
          border-left: 1px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]});
          color: rgb(${colorset[9]},${colorset[10]},${colorset[11]});
        }
        .hs-toggle-button:hover {
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 20px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.7);
        }
        .hs-toggle-button.active {
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 20px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.7);
        }
        .hs-toggle-button.active:hover {
          background: rgba(255,255,255,0);
          box-shadow: 0 0 20px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0);
        }
      `}</style>
    </button>
  )
}

export function HSToggler({width, items, theme}: {width: number, items: Toggleable[], theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <div className="hs-toggler">
        {items.map((item: Toggleable, index: number) =>
        <HsTogglerButton theme={theme} item={item} key={index}/>)}
        <style>{`
          button {
            background: transparent;
            cursor: pointer;
            border: none;
            transition: all 0.5s ease;
            outline: none;
          }
          .hs-toggler {
            background: #FFF;
            display: flex;
            border: 1px solid rgb(${colorset[0]},${colorset[1]},${colorset[2]});
            border-radius: 5px;
            min-height: 25px;
            justify-content: space-between;
            background: rgb(${colorset[6]},${colorset[7]},${colorset[8]});
            width: ${width}px;
          }
        `}</style>
      </div>
    </root.div>
    
    
  )
}