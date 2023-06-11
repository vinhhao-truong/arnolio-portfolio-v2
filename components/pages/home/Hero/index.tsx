import LogoDark from "@/components/common/Logo/LogoDark";
import LogoLight from "@/components/common/Logo/LogoLight";
import ReactProps from "@/interfaces/ReactProps";
import React from "react";

interface HeroProps extends ReactProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="">Welcome to</h1>
      <div className="w-[50vw] max-w-[800px] h-[calc(100vh-5rem)]">
        <LogoDark />
        <LogoLight />
      </div>
    </div>
  );
};

export default Hero;
