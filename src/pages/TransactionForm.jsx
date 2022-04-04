import { useState, useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log({ name, amount });
    addDocument({ uid, name, amount });
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <form
      className="border pb-8 pt-4 bg-white px-2 mt-5 shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-teal-600 font-thin text-xl md:text-2xl lg:text-3xl">
        Add Transaction
      </h2>
      <label className="mb-4 block mt-4">
        <span className="block mb-1">Transaction name:</span>
        <input
          className="border py-3 rounded w-full px-2 border-teal-500 focus:outline-teal-600 focus:border-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Transaction name"
          required
        />
      </label>
      <label className="block">
        <span className="block mb-1">Transaction amount: ('$')</span>
        <input
          className="border py-3 rounded w-full px-2 border-teal-500 focus:outline-teal-600 focus:border-2"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="0.00"
          required
        />
      </label>
      <button className="py-3 w-full bg-teal-500 mt-3 font-semibold tracking-wider rounded text-white hover:bg-teal-600 focus:bg-teal-700">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
