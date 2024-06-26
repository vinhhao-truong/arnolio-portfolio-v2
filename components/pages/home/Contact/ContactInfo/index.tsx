"use client";

import Image from "next/image";
import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import Logo from "@/components/common/Logo";
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
    <a
      target="_blank"
      href={href}
      className="flex items-center gap-1.5 hover:underline"
    >
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
    href: "tel:+84796368029",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-apple-phone-2-493154.png?f=webp",
    content: "(+84) 796 368 029",
  },
  {
    href: "https://www.linkedin.com/in/vinh-hao-truong-501102200/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    content: "https://www.linkedin.com/in/vinh-hao-truong-501102200/",
  },
  {
    href: "https://github.com/vinhhao-truong",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    content: "https://github.com/vinhhao-truong",
  },
];

const ContactInfo = () => {
  const mode = useSelector(selectGlobal).mode;

  return (
    <div className="">
      <div className="">
        <Logo className="w-[200px] 2xs:w-[300px] sm:w-[400px] max-w-[80%]" />
        <ul className="grid gap-y-4">
          {contactList.map((contact, idx) => {
            return (
              <li className="" key={`contact-url-${idx}`}>
                <ContactUrl {...contact} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
