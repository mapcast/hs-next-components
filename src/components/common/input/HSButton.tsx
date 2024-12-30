import React from 'react';
import root from 'react-shadow';
export function HSButton({text, onClick}: 
  {text: string|JSX.Element, onClick: () => void}) {

  return (
    <root.div>
      <button className="hs-button" onClick={onClick}>
        <div className="hs-button-hoverer"/>
        {text}
      </button>
      <style>{`
        .hs-button {
          font-family: inherit;
          position: relative;
          background: #E3ACF9;
          color: #8740BA;
          border-radius: 5px;
          padding: 4px 16px;
          cursor: pointer;
          border: 1px groove rgba(195,128,250,0.5);
          transition: all 0.5s ease;
          outline: none;
          box-shadow: 0 0 15px 0 rgba(195,128,250,0.3);
        }

        .hs-button:after {
          content: '»';
          position: absolute;
          opacity: 0;  
          transition: 0.5s;
          right: 10px;
        }

        .hs-button:hover{
          padding-right: 20px;
          padding-left: 12px;
          border: 1px groove rgb(195,128,250);
          box-shadow: 0 0 15px 0 rgba(195,128,250,0.7);
        }

        .hs-button-hoverer {
          position: absolute;
          transition: all 0.5s ease;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }

        .hs-button-hoverer:hover {
          background: rgba(255,255,255,0.2);
        }

        .hs-button:hover:after {
          opacity: 1;
        }
      `}</style>
    </root.div>
    
  )
}