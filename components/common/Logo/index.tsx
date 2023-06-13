import ReactProps from "@/interfaces/ReactProps";
import { getClasses } from "@/libs/utils/get/getProps";
import React from "react";
import LogoDark from "./LogoDark";
import LogoLight from "./LogoLight";

const Logo: React.FC<ReactProps> = ({ className }) => {
  return (
    <div className={`${getClasses(className)}`}>
      <LogoDark className="hidden dark:block" />
      <LogoLight className="dark:hidden" />
    </div>
  );
};

export default Logo;
