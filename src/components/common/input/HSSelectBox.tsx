'use client';
import { getColorTheme } from '@/src/function/common';
import React from 'react';
import { useState } from "react";
import root from 'react-shadow';

function HSSelectBoxItem({item, color, select}: {item: HSItem, color?: string, select: (val: HSItem) => void}) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <li
    onClick={() => select(item)} 
    onMouseOver={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{
    padding: '3px 5px',
    background: hovered ? color : 'transparent'
    }}>
      {item.display ? item.display : item.raw}
    </li>
  )
}

export function HSSelectBox({items, selected, setSelected, theme, width}: 
  {items: HSItem[], 
  selected: HSItem|null,
  setSelected: (val: HSItem) => void,
  theme?: string,
  width?: string|number}) {
  //const [selected, setSelected] = useState<HSItem|null>(null);
  const [opened, setOpened] = useState(false);
  const colorset = getColorTheme(theme ? theme : '');

  return (
    <root.div>
      <div style={{
        width: width ? width : 150, 
        position: 'relative',
        color: `rgba(${colorset[9]},${colorset[10]},${colorset[11]})`,
        borderRadius: 5, 
        cursor: "pointer",
        height: 26,
        fontSize: 14,
        boxShadow: `0 0 5px 0 rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5)`,
        border: `1px groove rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5)`}}>
        <div 
        onClick={() => setOpened(!opened)}
        style={{padding: '0 5px', display: 'flex', alignItems: 'center', width: '100%', height: '100%'}}>
          {selected ? selected.display ? selected.display : selected.raw : 'Select'}
        </div>
        {opened ? 
        <ul style={{
          padding: 0,
          top: 16,
          width: width ? width : 150, 
          maxHeight: 300,
          overflow: 'auto',
          position: 'absolute', 
          zIndex: 2, 
          borderRadius: 5,
          background: 'rgba(255,255,255,0.95)', 
          border: `1px groove rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5)`, 
          listStyleType: 'none'}}>
          {items.map((item: HSItem, index: number) => <HSSelectBoxItem key={index} color={`rgba(${colorset[0]},${colorset[1]},${colorset[2]},0.5)`} item={item} select={(item: HSItem) => {setSelected(item); setOpened(false);}}/>)}
        </ul> : <></>}
      </div>
    </root.div>
    
  )
}