import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 md:w-2/5 sm:w-2/3 p-10 border rounded-lg shadow-lg bg-white mt-40">
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
            <button
              type="submit"
              className="w-full p-3 text-white bg-teal-500 rounded-md text-lg hover:text-teal-100 hover:bg-teal-700 focus:outline-teal-700"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
