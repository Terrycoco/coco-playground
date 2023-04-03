import { twMerge } from "tailwind-merge";

export const Flexy = ({ children, className, ...props }) => {
  let cl = twMerge("flex flex-col md:flex-row", className ? className : "");
  return (
    <div className={cl} {...props}>
      {children}
    </div>
  );
};

export const FlexRow = ({ children, className, ...props }) => {
  let cl = twMerge("flex flex-row", className ? className : "");
  return (
    <div className={cl} {...props}>
      {children}
    </div>
  );
};

export const FlexCol = ({ children, className, ...props }) => {
  let cl = twMerge("flex flex-col", className ? className : "");
  return (
    <div className={cl} {...props}>
      {children}
    </div>
  );
};

export const FlexItem = ({ children, className, ...props }) => {
  let cl = twMerge("flex-auto", className ? className : "");
  return (
    <div className={cl} {...props}>
      {children}
    </div>
  );
};
