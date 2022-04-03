import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signUp } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(email, password, displayName);

    signUp(email, password, displayName);

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 md:w-1/4 sm:w-2/3 p-10 border rounded-lg shadow-lg bg-white mt-24">
        <h2 className="text-3xl text-teal-600 font-thin">Signup</h2>
        <form className="mt-10" onSubmit={handleSignup}>
          <label className="block text-left">
            <span className="block text-lg">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="border py-4 px-3 mt-1 w-full focus:outline-teal-300"
            />
          </label>
          <label className="block text-left mt-6">
            <span className="block text-lg">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="border py-4 px-3 mt-1 w-full focus:outline-teal-300"
            />
          </label>
          <label className="block text-left mt-6">
            <span className="block text-lg">Display name</span>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter display name"
              required
              className="border py-4 px-3 mt-1 w-full focus:outline-teal-300"
            />
          </label>
          <div className="mt-5">
            {!isPending && (
              <button
                type="submit"
                className="w-full p-3 text-white bg-teal-500 rounded-md text-lg hover:text-teal-100 hover:bg-teal-700 focus:outline-teal-700"
              >
                Signup
              </button>
            )}
            {isPending && (
              <button
                type="submit"
                className="w-full p-3 text-teal border border-teal-500 rounded-md text-lg hover:text-teal-100 focus:outline-teal-700"
                disabled
              >
                Loading...
              </button>
            )}
            {error && <p className="mt-2 text-red-300">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
