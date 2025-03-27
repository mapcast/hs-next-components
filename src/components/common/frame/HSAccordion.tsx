import React from 'react';
import { getColorTheme } from "@/src/function/common";
import { useState } from "react";
import SimpleArrow from '../item/SimpleArrow';

type HSAccordionItem = {
  title: string,
  content: string | JSX.Element,
  onClick?: () => void,
}
export function HSAccordion({items, width, height, theme, defaultSelected}: 
  {items: HSAccordionItem[], width: number, height: number, theme?: string, defaultSelected?: number}) {
  const [selected, setSelected] = useState(defaultSelected != null ? defaultSelected : -1);
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <ul className="hs-accordion">
      {items.map((item: HSAccordionItem, index: number) => 
      <li className={`hs-accordion-item 
      ${selected === index ? 'opened' : selected - 1 === index ? 'closed nobottomborder' : 'closed'} 
      ${index === 0 ? 'first' : ''}`} key={index}>
        <div onClick={() => selected === index ? setSelected(-1) : setSelected(index)} className="hs-accordion-item-title">
          <span>{item.title}</span>
          <div><SimpleArrow theme={theme} rotate={selected === index ? 270 : 90}/></div>
        </div>
        <div className="hs-accordion-item-content">
          <p>{item.content}</p>
        </div>
      </li>)}
      <style>{`
        .hs-accordion {
          width: ${width}px;
          height: ${height}px;
        }
        .hs-accordion-item {
          overflow-y: hidden;
          transition: all 0.5s ease;
        }
        .hs-accordion-item.opened {
          height: calc(100% - ${(items.length - 1) * 55}px);
          box-shadow: 0 10px 20px 10px rgba(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue},0.1);
          border-left: 2px solid rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
        }
        .hs-accordion-item.closed {
          height: 55px;
          border-bottom: 1px solid rgb(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue},0.1);
        }
        .hs-accordion-item.closed.nobottomborder {
          border-bottom: none;
        }
        .hs-accordion-item.closed.first {
          border-top: 1px solid rgb(${colorset.deep.red},${colorset.deep.green},${colorset.deep.blue},0.1);
        }
        .hs-accordion-item-title {
          height: 55px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 1.1rem;
        }
        .hs-accordion-item-content {
          padding: 0 20px;
          width: 100%;
          height: calc(100% - 55px);
          overflow-y: auto;
        }
      `}</style>
    </ul>
  )
}