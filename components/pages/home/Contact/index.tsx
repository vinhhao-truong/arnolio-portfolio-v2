"use client";

import FloatInSection from "@/components/common/FloatInSection";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <PageContainer className={`${styles.Background} mt-16`} id="contact">
      <FloatInSection className="">
        <h2 className="font-semibold text-7xl">Contact</h2>
        <div className="grid my-10 shadow-md lg:grid-cols-5">
          <div className="flex items-center justify-center col-span-2">
            <ContactInfo />
          </div>
          <div className="relative h-full overflow-hidden bg-system-navy dark:bg-system-white">
            <div
              className="absolute w-[400px] h-[400px] top-1/2 right-1/3 rounded-full bg-system-white dark:bg-system-navy"
              style={{ transform: "translateY(-50%)" }}
            ></div>
          </div>
          <div className="col-span-2 p-4 bg-system-navy dark:bg-system-white">
            <ContactForm />
          </div>
        </div>
      </FloatInSection>
    </PageContainer>
  );
};

export default Contact;
