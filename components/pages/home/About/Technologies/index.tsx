"use client";

import FloatInSection from "@/components/common/FloatInSection";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import React from "react";

const techImages: { url: string; title: string }[] = [
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/16071c26-9ef1-4596-af11-d41d313fd733.png",
    title: "HTML - CSS - SASS",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/5ad2057e-3d97-4f9f-9609-fa377c0f976a.png",
    title: "JavaScript - TypeScript",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/9ffeed02-f87e-4bd4-997e-0f70a4e2a7ca.png",
    title: "NodeJS - ExpressJS",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/44ae581d-b776-4416-b0f4-7d0d19e1696c.png",
    title: "ReactJS - NextJS",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/6de8a4d3-0ae9-4a29-bc4d-a8fd6863fada.png",
    title: "ReduxJS",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/f9e9fa4f-6a77-4d1a-a622-aedc57ad6ba1.png",
    title: "Python",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/e8318afd-6da1-4dd4-84af-e5dc7b3b62d4.png",
    title: "Bootstrap - TailwindCSS",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/b535a788-e280-4abd-9d07-8dfe7e25050c.png",
    title: "Mendix (Low-code development tool)",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/004c6dd2-e2de-4606-a383-fe829c7105e0.png",
    title: "Postgres - MongoDB",
  },
  {
    url: "https://jttmyzderuwrcaixsmjh.supabase.co/storage/v1/object/public/arnolio/tech-stacks/1b7e51d7-b44c-4873-a35b-7c3a6d2b1756.png",
    title: "GitHub - Docker",
  },
];

const Technologies = () => {
  return (
    <PageContainer>
      <FloatInSection className={``}>
        <h2 className="mb-4 text-3xl font-semibold text-center">
          My tech stack includes:
        </h2>
        <ul className="flex flex-wrap justify-center gap-12 p-4">
          {techImages.map((img, idx) => {
            return (
              <li
                className="relative border-4 dark:bg-white bg-system-navy"
                key={`tech-${idx}`}
              >
                <Image
                  src={img.url}
                  alt={`tech-img-${idx}`}
                  className="object-contain aspect-square"
                  width={156}
                  height={156}
                  title={img.title}
                />
              </li>
            );
          })}
        </ul>
      </FloatInSection>
    </PageContainer>
  );
};

export default Technologies;
