import React from 'react';
import root from 'react-shadow';
export function HSSwitch({value, checked, text, onChange}: {value: string, checked: boolean, text?: string, onChange: () => void}) {
  return (
    <root.div>
      <div style={{display: 'inline-block', padding: '2px 0'}}>
        <label style={{display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer'}}>
          <input type="checkbox" value={value} checked={checked} onChange={onChange} style={{display:'none'}}/>
          <div style={{width: 30, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <div style={{borderRadius: '30%', width: 20, height: 10, background: checked ? '#E3ACF9' : '#888', boxShadow: checked ? '0 0 8px 0 rgba(195,128,250,0.5)' : 'none'}}/>
            <div className={`switch-handle-wrap ${checked ? 'checked' : ''}`}>
              <div className={`switch-handle`}/>
            </div>
          </div>
          <span style={{color: '#C780FA'}}>{text}</span>
        </label>
        <style>{`
          .switch-handle-wrap {
            position: absolute;
            padding-left: 14px;
            left: 0;
            transition: all 0.1s ease;
          }
          .switch-handle-wrap.checked {
            padding-left: 3px;
          }
          .switch-handle {
            border-radius: 50%; 
            width: 12px; 
            height: 12px;
            background: #C780FA;
            border: 1px solid #B760EA;
            box-shadow: 0 0 15px 0 rgba(195,128,250,0.3);
          }
        `}</style>
      </div>
    </root.div>
  )
}