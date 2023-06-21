"use client";

import ReactProps from "@/interfaces/ReactProps";
import dynamic from "next/dynamic";

const NoSSr: React.FC<ReactProps> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSr), { ssr: false });
