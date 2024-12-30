import 'react';

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

type WrapperProp = {
  children: JSX.Element
}