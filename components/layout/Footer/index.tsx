"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import Logo from "@/components/common/Logo";
import styles from "./Footer.module.scss";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectGlobal } from "@/redux/globalSlice";
import systemColor from "@/assets/system/systemColor";

interface ContactUrlProps extends ReactProps {
  href: string;
  icon: string;
  content: string;
}
const ContactUrl: React.FC<ContactUrlProps> = ({ href, icon, content }) => {
  return (
    <a href={href} className="flex items-center gap-1 hover:underline w-max">
      <Image src={icon} alt={`img-${href}`} width={24} height={24} />
      {content}
    </a>
  );
};
const contactList: ContactUrlProps[] = [
  {
    href: "mailto:arnold.truong@arnolio.dev",
    icon: "https://privacyaustralia.net/wp-content/uploads/2019/02/email-icon-vector.png",
    content: "arnold.truong@arnolio.dev",
  },
  {
    href: "tel:+61434109621",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-apple-phone-2-493154.png?f=webp",
    content: "(+61) 434 109 621",
  },
  {
    href: "https://www.linkedin.com/in/arnold-truong-501102200/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    content: "LinkedIn",
  },
  {
    href: "https://github.com/vinhhao-truong",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    content: "Github",
  },
];

const Footer = () => {
  const mode = useSelector(selectGlobal).mode;

  return (
    <footer className={`${styles.Background}`}>
      <p className="px-2 text-sm italic text-right">
        © Arnolio {moment().format("YYYY")}
      </p>
    </footer>
  );
};

export default Footer;
