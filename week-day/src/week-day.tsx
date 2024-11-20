import { MenuBarExtra } from "@raycast/api";

export default function Command() {
  const date = new Date();
  date.setHours(date.getHours() + 1);

  let weekDay = "Monday";
  switch (date.getDay()) {
    case 1:
      weekDay = "Monday";
      break;
    case 2:
      weekDay = "Tuesday";
      break;
    case 3:
      weekDay = "Wednesday";
      break;
    case 4:
      weekDay = "Thursday";
      break;
    case 5:
      weekDay = "Friday";
      break;
    case 6:
      weekDay = "Saturday";
      break;
    case 7:
      weekDay = "Sunday";
      break;
    default:
      break;
  }

  return <MenuBarExtra title={weekDay} />;
}
