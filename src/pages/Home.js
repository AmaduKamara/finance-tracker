import React from "react";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "./../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import TransactionList from "./TransactionList";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions");

  return (
    <div className="py-16 container mx-auto flex">
      <div className="w-2/6 px-3">
        <TransactionForm uid={user.uid} />
      </div>
      <div className="w-4/6 mx-10">
        <h1 className="text-teal-600 font-semibold text-2xl md:text-3xl lg:text-5xl">
          Transactions
        </h1>
        {error && <p className="text-red-300">{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
    </div>
  );
};

export default Home;
