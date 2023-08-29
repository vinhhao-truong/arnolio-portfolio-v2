import ReactProps from "@/interfaces/ReactProps";
import moment, { Moment } from "moment";

interface ExpDescProps extends ReactProps {
  orgDesc: string;
  tasks?: string[];
}
const ExpDesc: React.FC<ExpDescProps> = ({ orgDesc, tasks }) => {
  return (
    <div className="z-[1] relative text-left px-4 py-2">
      <p className="text-slate-500">{orgDesc}</p>
      <ul className="list-disc">
        {tasks &&
          tasks.map((t, idx) => {
            return (
              <li className="ml-4" key={`${orgDesc} > ${idx}`}>
                {t}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
interface Exp {
  from?: Moment;
  to?: Moment;
  position: string;
  organisation: string;
  website?: string;
  desc?: React.ReactNode;
  orgLogo?: string;
  orgUrl?: string;
}

const experiences: Exp[] = [
  {
    from: moment("2022-03"),
    to: moment("2022-05"),
    position: "Software Developer (Volunteering)",
    organisation: "Comms Declare",
    orgLogo:
      "https://media.licdn.com/dms/image/C560BAQHRFBSHjmcgxg/company-logo_200_200/0/1584167853396?e=2147483647&v=beta&t=-r8cQuG6mX6Toy0piZkLow9jN2fJP4esMfkGaopQ9v8",
    orgUrl: "https://commsdeclare.org/",
    desc: (
      <ExpDesc
        orgDesc="A constructive, fact-based and non-partisan volunteer group harnesses the power of communications, marketing, media and advertising to supercharge the transition to a climate-friendly future."
        tasks={[
          "Provided feedbacks to the existing website in terms of design, content and architecture.",
          "Collaborated with peers to reconstruct some WordPress components.",
        ]}
      />
    ),
  },
  {
    from: moment("2022-05"),
    to: moment("2022-05"),
    position: "Software Developer (Volunteering)",
    organisation: "JDS",
    orgLogo:
      "https://media.cdn.gradconnection.com/uploads/f56781a3-2c6a-4628-9465-415de6c31dc6-JDS_Logo.png",
    orgUrl: "https://www.jds.net.au/",
    desc: (
      <ExpDesc
        orgDesc="An IT-solution company provides specialist services in a set of technologies and capabilities. JDS focuses on IT Monitoring (Observability), Security, Service Management, Quality Assurance and Automation"
        tasks={[
          "Sketched, programmed and pitched an automatic SMTP solution for the company and third-party partners.",
          "Collaborated with other developers and engineers.",
        ]}
      />
    ),
  },
  {
    from: moment("2022-09"),
    to: moment("2023-03"),
    position: "Software Developer",
    organisation: "Maqro Capital",
    orgLogo:
      "https://media.licdn.com/dms/image/C560BAQHTEt1PEzBAGg/company-logo_200_200/0/1636081323883?e=2147483647&v=beta&t=8yqZ_kx4qvRMOFTidYI-W3HVV2h6S5p7phlX7mY6WNo",
    orgUrl: "https://maqro.com.au/",
    desc: (
      <ExpDesc
        tasks={[
          "Developed a website and a web application applying latest technologies like NextJs, TailwindCSS, Strapi etc.",
          "Collaborated with other talented developers to deliver high-quality products.",
          "Connected CRM to the product to tighten the relationship between the sale team and clients.",
          "Managed and updated the CMS with all latest content from other teams.",
        ]}
        orgDesc="As a fin-tech company, Maqro provides a variety of financial services to investors, such as stock recommendations, trading strategies, advisory services, etc."
      />
    ),
  },
];

export default experiences;
