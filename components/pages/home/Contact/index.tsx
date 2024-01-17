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
        <h2 className="text-5xl font-semibold lg:text-7xl">Contact</h2>
        <div className="grid my-10 overflow-hidden border rounded-lg lg:gap-0 border-system-navy dark:border-system-white lg:grid-cols-5">
          <div className="flex items-center order-2 col-span-2 p-4 lg:justify-center lg:order-1">
            <ContactInfo />
          </div>
          <div className="relative h-full overflow-hidden bg-system-navy dark:bg-system-white lg:order-2">
            <div
              className="absolute w-[400px] h-[400px] top-1/2 right-1/3 rounded-full bg-system-white dark:bg-system-navy"
              style={{ transform: "translateY(-50%)" }}
            ></div>
          </div>
          <div className="order-1 col-span-2 p-4 bg-system-navy dark:bg-system-white lg:order-3">
            <h2 className="mb-3 text-4xl font-semibold sm:text-center lg:text-left text-system-white dark:text-system-blue">
              Contact Me (UNAVAILABLE)
            </h2>
            <ContactForm />
          </div>
        </div>
      </FloatInSection>
    </PageContainer>
  );
};

export default Contact;
