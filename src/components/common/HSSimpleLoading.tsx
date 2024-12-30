import React from 'react';

export function HSSimpleLoading() {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span className="spinner"/>
      <style>{`
        .spinner {
          width: 100px;
          height: 100px;
          border-right: 3px solid #E3AEF9;
          border-bottom: 3px solid #E3AEF9;
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation 1.5s linear infinite;
        }
        .spinner::after {
          content: '';  
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border-top: 3px solid;
          border-color: #8740BA transparent;
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