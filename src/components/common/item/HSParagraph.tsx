import React from 'react';
export function HSParagraph({fontSize, text, color}: {text: string,  color: string, fontSize?: number}) {
  return(
    <p style={{paddingBottom: '10px', fontSize : fontSize ? fontSize : '1rem', color}}>{text}</p>
  )
}