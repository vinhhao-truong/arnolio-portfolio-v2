import moment, { Moment } from "moment";

interface Exp {
  from?: Moment;
  to?: Moment;
  position: string;
  organisation: string;
  website?: string;
  desc?: React.ReactNode;
}

const experiences: Exp[] = [
  {
    from: moment("2022-03"),
    to: moment("2022-03"),
    position: "Software Developer (Volunteering)",
    organisation: "Comms Declare",
    desc: <>cd</>,
  },
  {
    from: moment("2022-05"),
    to: moment("2022-05"),
    position: "Software Developer (Volunteering)",
    organisation: "JDS",
    desc: <>jds</>,
  },
  {
    from: moment("2022-09"),
    to: moment("2023-03"),
    position: "Software Developer",
    organisation: "Maqro Capital",
    desc: <>maqro</>,
  },
];

export default experiences;
