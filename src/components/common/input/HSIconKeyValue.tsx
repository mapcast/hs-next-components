import { getColorTheme } from "@/src/function/common";
import React from 'react';

export function HSIconKeyValue({icon, name, value, width, theme}:
  {icon: 'date' | 'phone' | 'address' | 'email' | 'home' | 'github', name: string, value: string, width?: string | number, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div className="hs-icon-kv" style={{width: width ? width : 'auto', borderLeft: `2px solid rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`}}>
      <div className="hs-icon-kv-icon">
        
        {icon === 'date' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        style={{
          fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
        }}>
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
        </svg> :
        icon === 'phone' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        style={{
          fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
        }}>
          <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path> 
        </svg> :
        icon === 'address' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" 
        style={{
          fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
        }}>
          <path d="M12,10.8a2,2,0,1,0-2-2A2,2,0,0,0,12,10.8Zm-.71,6.91a1,1,0,0,0,1.42,0l4.09-4.1a6.79,6.79,0,1,0-9.6,0ZM7.23,8.34A4.81,4.81,0,0,1,9.36,4.79a4.81,4.81,0,0,1,5.28,0,4.82,4.82,0,0,1,.75,7.41L12,15.59,8.61,12.2A4.77,4.77,0,0,1,7.23,8.34ZM19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>
        </svg> :
        icon === 'email' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" 
        style={{
          fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
        }}>
          <path d="M23.99 6.13V6c0-.18-.01-.35-.06-.53C23.69 4.6 22.9 4 22 4H2C1.1 4 .31 4.6.07 5.47.02 5.65 0 5.82 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2l-.01-11.87zm-2-.13L12 12 2 6h19.99zM2 18V8.33l8.97 5.38c.32.19.67.29 1.03.29s.71-.1 1.03-.29l8.96-5.38L22 18H2z"></path>
        </svg> : 
        icon === 'home' ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        style={{
          fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
        }}>
          <path d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"></path>
        </svg> : 
        icon === 'github' ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        style={{
          fill: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`,
        }}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.53366 7.08397L7.5316 7.08474C7.26002 7.18609 7.04549 7.40042 6.9441 7.67199C6.93539 7.69534 6.92686 7.71875 6.91854 7.7422C6.65067 8.49667 6.57954 9.31617 6.70595 10.1058C6.71242 10.1462 6.71942 10.1866 6.72693 10.2269C6.69805 10.2732 6.66999 10.3201 6.64278 10.3675C6.21126 11.1187 5.98982 11.9947 6.00036 12.8816C6.00148 14.7829 6.50083 16.1389 7.41451 17.0447C8.30946 17.9319 9.45151 18.2334 10.4004 18.3624L10.4308 18.3664C11.488 18.5237 12.509 18.5147 13.5629 18.3383L13.5643 18.3381C14.517 18.2225 15.6687 17.9357 16.5726 17.0531C17.4961 16.1514 17.9985 14.7917 17.9996 12.8815C18.0102 11.9947 17.7887 11.1187 17.3572 10.3675C17.33 10.32 17.3018 10.2731 17.2729 10.2266C17.2804 10.1864 17.2873 10.1461 17.2938 10.1058C17.4202 9.31256 17.3465 8.48924 17.0735 7.73278C17.0658 7.7113 17.0578 7.68981 17.0497 7.66833C16.948 7.39922 16.7354 7.18692 16.4661 7.08569L16.4649 7.08524L16.4637 7.08479L16.4613 7.08389L16.4564 7.08209L16.4462 7.07845L16.4248 7.07115C16.41 7.06627 16.3942 7.0614 16.3774 7.05664C16.3438 7.04709 16.3062 7.03799 16.2648 7.02999C15.7853 6.93737 14.9893 7.02349 13.8406 7.80507C13.8141 7.82311 13.7874 7.84153 13.7605 7.86033C13.6952 7.8444 13.6298 7.82938 13.5643 7.81524C12.5189 7.58974 11.4451 7.59231 10.4004 7.82295C10.3466 7.83481 10.293 7.84728 10.2394 7.86034C10.2125 7.84154 10.1858 7.82312 10.1592 7.80507C9.00585 7.02077 8.20666 6.93756 7.72867 7.03037C7.68807 7.03825 7.65128 7.04718 7.6183 7.05651C7.60182 7.06117 7.58633 7.06592 7.57182 7.07068L7.55081 7.0778L7.54087 7.08134L7.53604 7.0831L7.53366 7.08397Z"></path>
        </svg> : <></>}
      </div>
      <div className="hs-icon-kv-key">
        <h5 style={{fontSize: 16, color: `rgb(${colorset.typo.red}, ${colorset.typo.green}, ${colorset.typo.blue})`}}>{name}</h5>
      </div>
      <div className="hs-icon-kv-value">
        <span style={{fontSize: 14, color: `rgb(${colorset.typo.red}, ${colorset.typo.green}, ${colorset.typo.blue})`}}>{value}</span>
      </div>
    </div>
  )
}