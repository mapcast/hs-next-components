import React from 'react';
export function HSSimpleTitle({level, text, color}: {level: number, text: string, color: string}) {
  return(
    <>
      {level === 1 ? <h1 style={{fontSize: '5rem', paddingBottom: '10px', fontWeight: 800, color, textTransform: 'capitalize'}}>{text}</h1> :
      level === 2 ? <h2 style={{fontSize: '4rem', paddingBottom: '10px', fontWeight: 800, color, textTransform: 'capitalize'}}>{text}</h2> :
      level === 3 ? <h3 style={{fontSize: '3rem', paddingBottom: '10px', fontWeight: 400, color, textTransform: 'capitalize'}}>{text}</h3> :
      level === 4 ? <h4 style={{fontSize: '2rem', paddingBottom: '10px', fontWeight: 400, color, textTransform: 'capitalize'}}>{text}</h4> :
      level === 5 ? <h5 style={{fontSize: '1rem', paddingBottom: '10px', fontWeight: 800, color, textTransform: 'capitalize'}}>{text}</h5> : <></>}
    </>
  )
}