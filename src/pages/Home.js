import React from "react";
import TransactionForm from "./TransactionForm";

const Home = () => {
  return (
    <div className="py-16 container mx-auto flex">
      <div className="w-1/4 bg-white border shadow py-10 px-3">
        <h1 className="text-teal-600 font-semibold text-xl md:text-2xl lg:text-3xl">
          Add Transaction
        </h1>
        <TransactionForm />
      </div>
      <div className="w-3/4">
        <h2>Transactions</h2>
      </div>
    </div>
  );
};

export default Home;
