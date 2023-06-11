import ReactProps from "@/interfaces/ReactProps";
import { getClasses } from "@/libs/utils/get/getProps";
import React from "react";

const PageContainer: React.FC<ReactProps> = ({ children, className }) => {
  return (
    <main
      className={`${getClasses(
        className
      )} px-2 md:px-4 flex items-center justify-center my-20`}
    >
      <div className="max-w-[1440px] w-full">{children}</div>
    </main>
  );
};

export default PageContainer;
