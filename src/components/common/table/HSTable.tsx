import React from 'react';
import { useState } from "react"
import SmallArrow from "../item/SmallArrow";
import { HSSimpleLoading } from '../HSSimpleLoading';
import { getColorTheme } from '@/src/function/common';
export {HSSimpleLoading} from '../HSSimpleLoading';

export function HSTable({headers, list, width, rowWidths, theme, loading, handleSort}: 
  {headers:HSTableHeader[], list: any[], width?: number | string,
    rowWidths?: Array<string|number>, theme?: string, loading?: boolean,
    handleSort?: (sort: HSSort) => void}) {
  const [sorted, setSorted] = useState<HSTableHeader|null>(null);
  const [direction, setDirection] = useState(true);
  const colorset = getColorTheme(theme ? theme : '');

  function sort(header: HSTableHeader) {
    if(handleSort) {
      setSorted(header);
      if(sorted) {
        let target = header.raw;
        if(target === sorted.raw) {
          if(direction) {
            handleSort({target, direction: false});
            setDirection(false);
          } else {
            handleSort({target: '', direction: true});
            setSorted(null);
            setDirection(true);
          }
        } else {
          handleSort({target, direction: true});
          setDirection(true);
          setSorted(header);
        }
      } else {
        handleSort({target: header.raw, direction: true});
      }
    }
  }

  return (
    <table style={{width: width ? width : '100%'}}>
      <thead>
        <tr style={{
          background: 'transparent',
          borderBottom: `1px groove rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue})`
        }}>
          {headers.map((header: HSTableHeader, index: number) => 
          <th className={handleSort ? 'clickable' : ''}
          key={header.id ? header.id : index} 
          style={{
            width: rowWidths ? rowWidths[index] : 'auto',
            cursor: handleSort ? 'pointer' : 'default'
          }}
          onClick={() => handleSort && header.type !== 'button' ? sort(header) : {}}>
            <div style={{display: 'flex'}}>
              <div style={{padding: '2px 0'}}>
                <span style={{cursor: handleSort ? 'pointer' : 'default'}}>{header.display ? header.display : header.raw}</span>
              </div>
              <div style={{width: 20, height: 20}}>{sorted ? 
              sorted.raw === header.raw ? 
              <SmallArrow theme={theme} rotate={direction ? 180: 0}/> 
              : <></> : <></>}</div>
            </div>
          </th>)}
        </tr>
      </thead>
      <tbody>
        {list.map((data: any, listIndex: number) => 
        <tr key={data.id ? data.id : listIndex} style={{
          background: listIndex % 2 == 0 ? `rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.05)` : `rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.15)`,
        }}>
          {headers.map((header: HSTableHeader, tdIndex: number) => 
          <td className={header.onClick ? 'clickable' : ''} key={tdIndex} 
          style={{cursor: header.onClick ? 'pointer' : 'default'}}
          onClick={() => header.onClick ? header.onClick(data) : {}}>
            {header.join ? 
            <>
              {data[header.join][header.raw] == null ? header.type === 'button' ? header.raw : '-' :
              !header.type || header.type === 'string' ? data[header.join][header.raw] :
              header.type === 'number' ? data[header.join][header.raw].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
              header.type === 'boolean' ? data[header.join][header.raw] ? header.bool?.true : header.bool?.false :
              header.type === 'time' ? data[header.join][header.raw].substring(0,19).replace("T", " ") : <></>}
            </> 
            :
            <>
              {data[header.raw] == null ? header.type === 'button' ? header.raw : '-' :
              !header.type || header.type === 'string' ? data[header.raw] :
              header.type === 'number' ? data[header.raw].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
              header.type === 'boolean' ? data[header.raw] ? header.bool?.true : header.bool?.false :
              header.type === 'time' ? data[header.raw].substring(0,19).replace("T", " ") : <></>}
            </>}
          </td>)}
        </tr>)}
        {loading ? <tr><td colSpan={headers.length} style={{padding: 10}}><HSSimpleLoading/></td></tr>
        : list.length === 0 ? <tr><td colSpan={headers.length} style={{padding: 10}}><center>No Information.</center></td></tr> : <></>}
      </tbody>
      <style>{`
        table {
          border-spacing: 0px;
          border-style: none;
          border-collapse: collapse;
          padding: 0px;
          table-layout: fixed;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          box-shadow: 0 0 5px 0 rgba(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue},0.5);
        }
        th {
          border-spacing: 0px;
          border-style: none;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          padding: 8px 10px;
          fontWeight: 800;
          color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
          text-align: left;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        td {
          border-spacing: 0px;
          color: rgb(${colorset.typo.red},${colorset.typo.green},${colorset.typo.blue});
          border-style: none;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space: nowrap;
          padding: 5px 10px;
          transition: all 0.3s ease;
        }
        .clickable:hover {
          color: rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue});
        }
      `}</style>
    </table>
  )
}