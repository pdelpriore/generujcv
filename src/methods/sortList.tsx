import moment from "moment";
import { diploma, experience } from "../hooks/form/formTypes";

export const sortList = (
  elementA: diploma | experience,
  elementB: diploma | experience
): number => {
  const now = new Date();

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
      ? now
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
      ? now
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

  let differenceElementAFromNow = endElementA.isSame(now)
    ? endElementA.diff(startElementA, "days")
    : moment(endElementA.diff(startElementA, "days")).add(
        moment(now).diff(endElementA, "days")
      );
  let differenceElementBFromNow = endElementB.isSame(now)
    ? endElementB.diff(startElementB, "days")
    : moment(endElementB.diff(startElementB, "days")).add(
        moment(now).diff(endElementB, "days")
      );

  return differenceElementAFromNow < differenceElementBFromNow ? -1 : 1;
};
