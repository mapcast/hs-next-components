import React from 'react';

export default function SmallArrow({rotate}: {rotate?: number}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    style={{
      fill: 'rgb(195,128,250)',
      transform: `rotate(${rotate ? `${rotate}deg` : '0'})`
    }}>
      <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
    </svg>
  );
}
