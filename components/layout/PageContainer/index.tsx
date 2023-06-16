import ReactProps from "@/interfaces/ReactProps";
import { getClasses } from "@/libs/utils/get/getProps";
import React from "react";

const PageContainer: React.FC<ReactProps> = ({ children, className, id }) => {
  return (
    <div
      className={`${getClasses(
        className
      )} px-2 md:px-4 flex items-center justify-center`}
      id={getClasses(id)}
    >
      <div className="max-w-[1440px] w-full h-full">{children}</div>
    </div>
  );
};

export default PageContainer;
