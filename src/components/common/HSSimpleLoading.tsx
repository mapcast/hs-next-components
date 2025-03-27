'use client';
import { getColorTheme } from '@/src/function/common';
import React from 'react';

export function HSSimpleLoading({theme}: {theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="spinner">
        <div className="spinner-inner"/>
      </div>
      <style>{`
        .spinner {
          width: 100px;
          height: 100px;
          border-right: 3px solid rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
          border-bottom: 3px solid rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue});
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation 1.5s linear infinite;
        }
        .spinner-inner {
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border-top: 3px solid;
          border-color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue}) transparent;
        }
        
        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        } 
      `}</style>
    </div>
  )
}