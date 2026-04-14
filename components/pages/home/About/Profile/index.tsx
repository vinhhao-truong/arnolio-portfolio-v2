"use client";

import FloatInSection from "@/components/common/FloatInSection";
import ReactProps from "@/interfaces/ReactProps";
import Image from "next/image";
import React from "react";
import styles from "./Profile.module.scss";

const Profile: React.FC<ReactProps> = () => {
  return (
    <FloatInSection className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-20 lg:items-start">
      <Image
        src={
          "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/72c08f25-2d43-4a94-9756-8a1dc8942b9f%201.png"
        }
        height={280}
        width={280}
        alt={"profile-img"}
        className="rounded-full shadow-lg h-auto shadow-system-navy dark:shadow-system-white max-w-[30vw] sm:max-w-[40vw] aspect-square object-cover"
      />
      <section className="flex flex-col items-center leading-loose lg:w-1/2">
        <h2 className={`text-gradient text-4xl font-bold text-center`}>
          Vinh Hao (Arnold) Truong
        </h2>
        <h3 className="mb-4 text-2xl text-center">Software Engineer</h3>
        <p className="leading-normal">
          Software Developer with 1+ year of commercial experience and 3+ years
          of hands-on experience delivering scalable and maintainable
          applications using Mendix, React, and Next.js. Experienced in domain
          modelling, REST/SOAP API integration, and developing custom frontend
          components to support business requirements. Proven ability to work in
          Agile/SCRUM environments, collaborating with cross-functional
          stakeholders to deliver high-quality solutions across multiple
          projects. Demonstrated impact in improving system performance,
          streamlining data workflows, and building production-ready features
          that enhance user experience and business operations.
        </p>
      </section>
    </FloatInSection>
  );
};

export default Profile;
