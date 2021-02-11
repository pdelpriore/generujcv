import moment from "moment";
import { diploma } from "../hooks/form/formTypes";

export const sortList = (elementA: diploma, elementB: diploma): number => {
  let startElementA = moment([
    elementA.startPeriod.year,
    parseInt(
      elementA.startPeriod.month.startsWith("0")
        ? elementA.startPeriod.month.substr(1)
        : elementA.startPeriod.month
    ),
    1,
  ]);
  let endElementA = moment(
    elementA.endPeriod.month.length === 0 && elementA.endPeriod.year === 0
      ? new Date()
      : [
          elementA.endPeriod.year,
          parseInt(
            elementA.endPeriod.month.startsWith("0")
              ? elementA.endPeriod.month.substr(1)
              : elementA.endPeriod.month
          ),
          1,
        ]
  );

  let startElementB = moment([
    elementB.startPeriod.year,
    parseInt(
      elementB.startPeriod.month.startsWith("0")
        ? elementB.startPeriod.month.substr(1)
        : elementB.startPeriod.month
    ),
    1,
  ]);
  let endElementB = moment(
    elementB.endPeriod.month.length === 0 && elementB.endPeriod.year === 0
      ? new Date()
      : [
          elementB.endPeriod.year,
          parseInt(
            elementB.endPeriod.month.startsWith("0")
              ? elementB.endPeriod.month.substr(1)
              : elementB.endPeriod.month
          ),
          1,
        ]
  );

  let differenceInDaysElementA = endElementA.diff(startElementA, "days");
  let differenceInDaysElementB = endElementB.diff(startElementB, "days");

  return differenceInDaysElementA > differenceInDaysElementB ? -1 : 1;
};
