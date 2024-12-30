import React from 'react';

export function HSDevider({size, horizontal}: {size: number, horizontal?: boolean}) {
  return (
    <div className="hs-devider">
      <style jsx>{`
        .hs-devider {
          width: ${horizontal ? `${size}px` : '100%'};
          height: ${horizontal ? '100%' : `${size}px`};
          background-image: ${horizontal ? 'linear-gradient(to bottom, #8740BA, #E3AEF9)' : 'linear-gradient(to right, #8740BA, #E3AEF9)'};
        }
      `}</style>
    </div>
  )
}