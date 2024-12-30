import React from 'react';
import {useEffect} from 'react';
import root from 'react-shadow';

export function HSSimpleToast({text, active, close}: {text: string, active: boolean, close: () => void}) {
  useEffect(() => {
    if(active) {
      setTimeout(() => {
        close();
      }, 2000);
    }
  }, [active]);
  return (
    <root.div>
      <div className={`simple-toast ${active ? 'active' : ''}`}>
        {text}
      </div>
      <style>{`
        .simple-toast {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #FFF;
          color: #8740BA;
          font-weight: 800;
          font-size: 14px;
          padding: 0 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 9999;
          opacity: 0;
          transition: all 0.5s ease-out;
          height: 65px;
          box-shadow: 0 0 25px 0 rgba(195,128,250,0.7);
        }
        
        .simple-toast.active {
          opacity: 0.9;
        }

        p {
          font-size: 16px;
          line-height: 1.4;
        }
      `}</style>
    </root.div>
  )
}