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
          "https://firebasestorage.googleapis.com/v0/b/arnolio.appspot.com/o/arnolio-avatar.webp?alt=media&token=41ec6de0-4c2f-4c18-882f-51e7b3e1dc1a"
        }
        height={280}
        width={280}
        alt={"profile-img"}
        className="rounded-full shadow-lg h-auto shadow-system-navy dark:shadow-system-white max-w-[30vw] sm:max-w-[40vw]"
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
