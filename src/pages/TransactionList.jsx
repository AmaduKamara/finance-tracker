import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <ul className="pt-6">
      {transactions.map((transaction) => (
        <li
          className="p-5 mb-4 shadow-md bg-white border-r-4 border-teal-500 flex justify-between items-center"
          key={transaction.id}
        >
          <h3 className="text-2xl">{transaction.name}</h3>
          <p className="text-2xl font-semibold text-gray-500">${transaction.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
