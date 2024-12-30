import React from 'react';
export function HSProgressBar({text, value, textTransform}: {text: string, value: number, textTransform?: string}) {
  return (
    <div style={{width: '100%', height: '100%', background: `rgba(195,128,250,0.3)`, position: 'relative'}}>
      <div style={{position: 'absolute', right: 7, color: '#8740BA', fontSize: '0.7rem', fontWeight: 100, height: '100%', display: 'flex', alignItems: 'center', transform: textTransform}}>
        {text}
      </div>
      <div style={{width: `${value}%`, height: '100%', 
      backgroundImage: `linear-gradient(to right, rgba(195,128,250,0.2), rgb(195,128,250))`}}/>
    </div>
  );
}
