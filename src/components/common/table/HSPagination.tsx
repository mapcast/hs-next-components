import { useEffect, useState } from 'react'; 
import DoubleArrow from '../item/DoubleArrow';
import SimpleArrow from '../item/SimpleArrow';
import React from 'react';

export function HSPagination({page, maxPage, setPage, onChange}: 
  {page: number, maxPage: number, setPage: (pg: number) => void, onChange: Function}) {
  const [pageList, setPageList] = useState<number[]>([]);
  useEffect(() => {
    if (maxPage >= 5) {
      let firstPage = 0;
      if (page < 3) firstPage = 1;
      else if (page > maxPage - 3) firstPage = maxPage - 4;
      else firstPage = page - 2;
      setPageList(Array(5).fill(firstPage).map((n, i) => n + i));
    }
    else setPageList(Array(maxPage).fill(1).map((n, i) => n + i));
  }, [page, maxPage]);
  useEffect(() => {onChange()}, [page]);
  return (
    <div className="pagination-wrap">
      <div className="pagination">
        <button style={{padding: '1px'}} disabled={page <= 1} onClick={() => setPage(1)}><DoubleArrow rotate={270}/></button>
        <button style={{padding: '1px', marginRight: 10}} disabled={page <= 1} onClick={() => setPage(page - 1)}><SimpleArrow rotate={180}/></button>
        {/*<span style={{fontWeight: '800', fontSize: '13px'}} className="blue">{`${page + 1} (1~${maxPage})`}</span>*/}
        {pageList.map((pg: number) => 
          <button className={`hs-pagination-page ${page === pg ? "active" : ""}`} key={pg} style={{width: 26, height: 26}} onClick={() => setPage(pg)}>{pg}</button>
        )}
        <button style={{padding: '1px', marginLeft: 10}} disabled={page + 1 > maxPage} onClick={() => setPage(page + 1)}><SimpleArrow rotate={0}/></button>
        <button style={{padding: '1px'}} disabled={page + 1 > maxPage} onClick={() => setPage(maxPage)}><DoubleArrow rotate={90}/></button>
      </div>
      <style jsx>{`
        .pagination-wrap {
          width: 100%;
          padding: 5px 0 6px 0;
        }
        .pagination {
          display: flex;
          gap: 3px;
          justify-content: center;
          width: 100%;
        }
        button {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.7s;
          border-radius: 2px;
        }
        .hs-pagination-page {
          color: #C780FA;
          border-radius: 8px;
        }
        .hs-pagination-page:hover, .hs-pagination-page.active {
          background: #FFF;
          box-shadow: 0 0 15px 0 rgba(195,128,250,1);
        }
        span {
          cursor: default;
        }
      `}</style>
    </div>
  )
} 