"use client";

import FloatInSection from "@/components/common/FloatInSection";
import ReactProps from "@/interfaces/ReactProps";
import Image from "next/image";
import React from "react";

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
        className="rounded-full shadow-lg shadow-system-navy dark:shadow-system-white max-w-[60vw]"
      />
      <section className="flex flex-col items-center leading-loose lg:w-1/2">
        <h1 className="text-4xl font-bold text-center">Arnold Truong</h1>
        <h2 className="mb-4 text-2xl text-center">Web developer</h2>
        <p className="leading-normal">
          Experienced software engineer with proven ability to learn, self-start
          and collaborate in rapidly changing environments. Equipped with a
          record of success in delivering responsive and high-quality web app
          that adapts business requirements by planning, designing, building and
          testing with following agile methodology. Proficient in applying most
          recent technology such as NextJS and TailwindCSS to implement new
          features based on requirements under strict deadlines. Eager to learn
          and challenge myself for better development skills.
        </p>
      </section>
    </FloatInSection>
  );
};

export default Profile;
