import React from "react";
import IncomeItem from "./IncomeItem";

function IncomeList({ income, setIncome } : any) {
  const removeIncome = (i: any) => {
    let temp = income.filter((v: any, index: number) => index != i);
    setIncome(temp);
  };

  const sortByDate = (a: { date: number; }, b: { date: number; }) => {
    return a.date - b.date;
  }
  return (
    <div className="income-list">
      {income.sort(sortByDate).map((value: any, index: any) => (
        <IncomeItem
          key={index}
          income={value}
          index={index}
          removeIncome={removeIncome}
        />
      ))}
    </div>
  );
}

export default IncomeList;
