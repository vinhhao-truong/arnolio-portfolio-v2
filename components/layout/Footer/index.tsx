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
  return (
    <footer className={`${styles.Background} relative`}>
      <div className={`${styles.Mask} absolute w-full h-full`} />
      <div className="w-full h-[2px] bg-system-navy dark:bg-system-white absolute top-1/2 z-[1]" />
      <PageContainer className={`relative z-[1]`} id="contacts">
        <div className="my-20 w-[500px] max-w-full border-r-[20px] bg-system-white dark:bg-system-navy border-r-system-navy dark:shadow-system-white/40 dark:border-r-system-white p-2 xs:p-4 rounded shadow-lg ">
          <Logo className="w-[300px] max-w-[80%]" />
          <ul className="grid grid-cols-2 text-[8px] 2xs:text-[10px] text-sm gap-x-8 gap-y-4 xs:text-base">
            {contactList.map((contact, idx) => {
              return (
                <li className="" key={`contact-url-${idx}`}>
                  <ContactUrl {...contact} />
                </li>
              );
            })}
          </ul>
        </div>
      </PageContainer>
      <p className="px-2 text-sm italic text-right">
        © Arnolio {moment().format("YYYY")}
      </p>
    </footer>
  );
};

export default Footer;
