'use client';
import React from 'react';
import { useState } from "react";
import HSShelf from "./HSShelf";
import root from 'react-shadow';
import DoubleArrow from "../../item/DoubleArrow";
import { getColorTheme } from '@/src/function/common';

export function HSDrawer({items, theme}: {items: HSShelfItem[], theme?: string}) {
  const [active, setActive] = useState<boolean|null>(null);
  const [opened, setOpened] = useState<HSShelfItem|null>(null);
  const colorset = getColorTheme(theme ? theme : '');

  return (
    <root.div>
      <nav className={`hs-nav ${active == null ? 'initial' : active ? 'active' : 'deactive'}`}>
        <button className="opener" onClick={() => setActive(!active)}><div className="opener-border">{active ? <DoubleArrow theme={theme} rotate={270}/> : <DoubleArrow theme={theme} rotate={90}/>}</div></button>
        {items.map((shelf: HSShelfItem, index: number) => <HSShelf theme={theme} key={index} opened={opened != null && opened.text === shelf.text} setOpened={setOpened} shelf={shelf}/>)}
        <style>{`
          button {
            background: transparent;
            cursor: pointer;
            border: none;
            transition: all 0.5s ease;
            outline: none;
          }
          .element-to-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .vertical-align {
            display: flex;
            align-items: center;
          }
          .hs-nav {
            position: fixed; 
            left: 0;
            top: 0;
            height: 100vh;
            width: 330px;
            background: #FFF;
            color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
            z-index: 100;
            padding: 10px;
            border-right: 1px solid rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
          }
          .active {
            animation-name: open-nav;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }
          .deactive {
            animation-name: close-nav;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }
          .initial {
            animation-name: initial-nav;
            animation-duration: 0s;
            animation-fill-mode: forwards;
          }
          
          
          @keyframes open-nav{
            0%{
              transform: translateX(-351px);
            }
            100%{
              transform: translateX(0px);
            }
          }
          @keyframes close-nav{
            0%{
              transform: translateX(0px);
            }
            100%{
              transform: translateX(-351px);
            }
          }
          @keyframes initial-nav{
            100%{
              transform: translateX(-351px);
            }
          }
          .opener {
            position: fixed;
            padding-left: 4px;
            padding-right: 0;
            padding-top: 0;
            padding-bottom: 0;
            top: 50%;
            transform: translateY(-50%);
            left: 346px;
            background: #FFF;
            border-radius: 0 3px 3px 0;
          }
          .opener-border {
            border-top: 1px groove rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
            border-bottom: 1px groove rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
            border-right: 1px groove rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
            border-radius: 0 3px 3px 0;
            padding: 3px 0;
            display: flex;
            justify-content: right;
            align-items: center;
          }
        `}</style>
      </nav>
    </root.div>
  )
}