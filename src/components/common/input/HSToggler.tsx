'use client';
import React from 'react';
import {useState} from 'react';
import root from 'react-shadow';
function HsTogglerButton({item}: {item: Toggleable}) {
  const [active, setActive] = useState(item.default);
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
          border-left: 1px solid #C780FA;
          color: #8740BA;
        }
        .hs-toggle-button:hover {
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 20px 0 rgba(195,128,250,0.7);
        }
        .hs-toggle-button.active {
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 20px 0 rgba(195,128,250,0.7);
        }
        .hs-toggle-button.active:hover {
          background: rgba(255,255,255,0);
          box-shadow: 0 0 20px 0 rgba(195,128,250,0);
        }
      `}</style>
    </button>
  )
}

export function HSToggler({width, items}: {width: number, items: Toggleable[]}) {
  return (
    <root.div>
      <div className="hs-toggler">
        {items.map((item: Toggleable, index: number) =>
        <HsTogglerButton item={item} key={index}/>)}
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
            border: 1px solid #C780FA;
            border-radius: 5px;
            min-height: 25px;
            justify-content: space-between;
            background: #E3ACF9;
            width: ${width}px;
          }
        `}</style>
      </div>
    </root.div>
    
    
  )
}