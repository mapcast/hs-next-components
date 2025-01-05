import { getColorTheme } from '@/src/function/common';
import React from 'react';
import root from 'react-shadow';

export function HSMiniMenu({item, theme}: {item: HSClickableCategory, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <root.div>
      <div key={item.title} className="hs-mini-menu">
        <div style={{minWidth: 150}}>
          <h4>{item.title}</h4>
          <ul>
            {item.items.map((subItem: Clickable, index: number) => 
            <li key={index}><a onClick={subItem.onClick}>{subItem.display}</a></li>)}
          </ul>
        </div>
        <style>{`
          .hs-mini-menu{
            flex-grow: 1;
            max-width: 250px;
            display: flex;
            justify-content: center;
            cursor: default;
          }
          .hs-mini-menu h4{
            font-size: 18px;
            color: rgb(${colorset[9]},${colorset[10]},${colorset[11]});
            text-transform: capitalize;
            margin-bottom: 25px;
            font-weight: 500;
            position: relative;
          }
          .hs-mini-menu h4::before{
            content: '';
            position: absolute;
            left:0;
            bottom: -10px;
            background-color: rgb(${colorset[9]},${colorset[10]},${colorset[11]});
            height: 2px;
            box-sizing: border-box;
            width: 80px;
          }
          .hs-mini-menu ul {
            list-style-type: none;
            padding-left: 10px;
          }
          .hs-mini-menu ul li:not(:last-child){
            margin-bottom: 10px;
          }
          .hs-mini-menu ul li a{
            font-size: 16px;
            text-transform: capitalize;
            color: rgb(${colorset[3]},${colorset[4]},${colorset[5]});
            text-decoration: none;
            font-weight: 300;
            display: block;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .hs-mini-menu ul li a:hover{
            color: rgb(${colorset[6]},${colorset[7]},${colorset[8]});
            padding-left: 3px;
          }
        `}</style>
      </div>
    </root.div>
  )
}