import { ReactNode } from "react";

const Callout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" my-6 flex items-center rounded-md border border-l-4 p-4">
      {children}
    </div>
  );
};

export default Callout;
