'use client'
import React from 'react';

import SimpleArrow from "../../item/SimpleArrow";
import { getColorTheme } from '@/src/function/common';

export default function HSShelf({shelf, opened, setOpened, theme}: {shelf: HSShelfItem, opened: boolean, setOpened: (shelf: HSShelfItem|null) => void, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  
  return (
    <div className={`shelves ${opened ? 'opened' : 'closed'}`}>
      <div className="main-shelf" onClick={() => setOpened(opened ? null : shelf)}>
        <div className="vertical-align" style={{gap: 10, paddingLeft: shelf.icon ? 25 : 30}}>
          {shelf.icon ? <img src={shelf.icon} style={{width: 20, height: 20, transform: 'translateY(1px)'}}/> : <></>}
          <span style={{fontSize: 18}}>{shelf.text}</span>
        </div>
        <div className="element-to-center">
          {!opened ? 
          <SimpleArrow theme={theme} rotate={90}/> : <></>}
        </div>
      </div>
      <ul className={`sub-drawer ${opened ? 'active' : ''}`}>
        {shelf.sub.map((sub: HSSubShelfItem, index: number) =>
        <li className="sub-shelf" key={index} onClick={() => sub.onClick()}>
          {sub.text}
        </li>)}
      </ul>
      <style>{`
        .shelves {
          overflow-y: hidden;
          transition: all 0.3s;
        }
        .main-shelf {
          width: 100%;
          height: 59px;
          display: grid;
          grid-template-columns: 1fr 50px;
          cursor: pointer;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .opened > .main-shelf {
          background: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
        }
        .main-shelf:hover {
          background: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
        }
        .sub-drawer {
          background: #FFF;
          border-radius: 0 0 10px 10px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          max-height: 0px;
          transition: all 0.5s ease;
          padding: 0;
          box-shadow: 0 0 25px 1px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .opened > .sub-drawer {
          max-height: 600px;
        }
        ul {
          margin: 0;
        }
        .sub-shelf {
          cursor: pointer;
          font-size: 12px;
          padding: 8px 25px;
          list-style: square inside;
          transition: all 0.3s ease;
        }
        .sub-shelf:hover {
          font-weight: 800;
          background: rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.3);
        }
      `}</style>
    </div>
  )

}