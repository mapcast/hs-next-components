'use  client';
import React from 'react';

type ModalProp = {
  children: JSX.Element,
  active: boolean, 
  setActive: (active: boolean) => void,
  title?: string
}

export const HSModal: React.FC<ModalProp> = ({title, children, active, setActive}) => {
  return (
    <div className={`modal ${active ? 'active' : 'deactive'}`}>
      <div 
      style={{position: 'absolute', width: '100%', height: '100%'}} 
      onClick={() => setActive(false)}/>
      <div style={{background: '#FFF', zIndex: 2, borderRadius: 5}}>
        {title ? <h5 style={{padding: '10px 0', textAlign: 'center', color: '#000'}}>{title}</h5> : <></>}
        {children}
      </div>
      <style>{`
        .modal {
          position: fixed; 
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          justify-content: center; 
          align-items: center; 
          transition: all 0.3s;
          background: rgba(0,0,0,0.5);
          z-index: 1;
        }
        .active {
          display: flex;
        }
        .deactive {
          display: none;
        }
      `}</style>
    </div>
  )
}
