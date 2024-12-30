import React from 'react';
import { useState } from "react"
import SmallArrow from "../item/SmallArrow";
import { HSSimpleLoading } from '../HSSimpleLoading';
export {HSSimpleLoading} from '../HSSimpleLoading';

export function HSTable({headers, list, width, loading, handleSort, handleClickData}: 
  {headers:HSTableHeader[], list: any[], 
    width?: Array<string|number>, loading?: boolean,
    handleSort?: (sort: HSSort) => void, handleClickData?: (header: HSTableHeader, data: string) => void}) {
  const [sorted, setSorted] = useState<HSTableHeader|null>(null);
  const [direction, setDirection] = useState(true);

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
    <table>
      <thead>
        <tr style={{
          background: 'transparent',
          borderBottom: '1px groove #E7A0FF'
        }}>
          {headers.map((header: HSTableHeader, index: number) => 
          <th className={handleSort ? 'clickable' : ''}
          key={header.id ? header.id : index} 
          style={{
            width: width ? width[index] : 'auto',
            cursor: handleSort ? 'pointer' : 'default'
          }}
          onClick={() => handleSort ? sort(header) : {}}>
            <div style={{display: 'flex'}}>
              <div style={{padding: '2px 0'}}>
                <span>{header.display ? header.display : header.raw}</span>
              </div>
              <div style={{width: 20, height: 20}}>{sorted ? 
              sorted.raw === header.raw ? 
              <SmallArrow rotate={direction ? 180: 0}/> 
              : <></> : <></>}</div>
            </div>
          </th>)}
        </tr>
      </thead>
      <tbody>
        {list.map((data: any, listIndex: number) => 
          <tr key={data.id ? data.id : listIndex} style={{
            background: listIndex % 2 == 0 ? 'rgba(195,128,250,0.05)' : 'rgba(195,128,250,0.15)',
          }}>
            {headers.map((header: HSTableHeader, tdIndex: number) => 
            <td className={handleClickData && header.clickable ? 'clickable' : ''} key={tdIndex} 
            style={{cursor: handleClickData && header.clickable ? 'pointer' : 'default'}}
            onClick={() => handleClickData && header.clickable ? handleClickData(header, header.join ? data[header.join][header.raw] : data[header.raw]) : {}}>
              {header.join ? 
              <>
                {data[header.join][header.raw] == null ? '-' :
                !header.type || header.type === 'string' ? data[header.join][header.raw] :
                header.type === 'number' ? data[header.join][header.raw].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
                header.type === 'boolean' ? data[header.join][header.raw] ? header.bool?.true : header.bool?.false :
                header.type === 'time' ? data[header.join][header.raw].substring(0,19).replace("T", " ") : <></>}
              </> 
              :
              <>
                {data[header.raw] == null ? '-' :
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
      <style jsx>{`
        table {
          border-spacing: 0px;
          border-style: none;
          border-collapse: collapse;
          padding: 0px;
          width: 100%;
          table-layout: fixed;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          box-shadow: 0 0 5px 0 rgba(195,128,250,0.5);
        }
        th {
          border-spacing: 0px;
          border-style: none;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          padding: 8px 10px;
          fontWeight: 800;
          color: #8740BA;
          text-align: left;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        td {
          border-spacing: 0px;
          color: #8740BA;
          border-style: none;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space: nowrap;
          padding: 5px 10px;
          transition: all 0.3s ease;
        }
        .clickable:hover {
          color: rgb(195,128,250);
        }
      `}</style>
    </table>
  )
}