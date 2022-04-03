import React from "react";
import TransactionForm from "./TransactionForm";

const Home = () => {
  return (
    <div className="py-16 container mx-auto flex">
      <div className="w-2/6 bg-white border shadow py-10 px-3">
        <h2 className="text-teal-600 font-thin text-xl md:text-2xl lg:text-3xl">
          Add Transaction
        </h2>
        <TransactionForm />
      </div>
      <div className="w-4/6 mx-10">
        <h1 className="text-teal-600 font-semibold text-2xl md:text-3xl lg:text-5xl">
          Transactions
        </h1>

      </div>
    </div>
  );
};

export default Home;
