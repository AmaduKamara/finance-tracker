import { useState } from "react";

const TransactionForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ name, amount });

    setName("");
    setAmount("");
  };

  return (
    <form className="border py-4 px-2 mt-5 shadow-lg" onSubmit={handleSubmit}>
      <label className="mb-4 block">
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
      <button className="py-3 w-full bg-teal-500 mt-3 rounded text-white hover:bg-teal-600 focus:bg-teal-700">
        Save
      </button>
    </form>
  );
};

export default TransactionForm;
