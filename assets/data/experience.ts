import moment, { Moment } from "moment";

interface Exp {
  from: Moment;
  to?: Moment;
  position: string;
  organisation: string;
}

const experiences: Exp[] = [
  {
    from: moment("2022-03"),
    to: moment("2022-03"),
    position: "Software Developer (Volunteering)",
    organisation: "Comms Declare",
  },
  {
    from: moment("2022-05"),
    to: moment("2022-05"),
    position: "Software Developer (Volunteering)",
    organisation: "JDS",
  },
  {
    from: moment("2022-09"),
    to: moment("2023-03"),
    position: "Software Developer",
    organisation: "Maqro Capital",
  },
];

export default experiences;
