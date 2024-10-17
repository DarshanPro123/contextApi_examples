import React, { useContext, useState } from "react";

import UserProfile from "../contexts/UserProfile";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserProfile);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="border flex flex-col p-5 mx-auto max-w-screen-sm my-auto items-center justify-center gap-4">
      <input
        type="text"
        value={username}
        className="border border-gray-800 p-3 w-full"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-800 p-3 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="border border-blue-600 px-4 py-2 w-full bg-cyan-300"
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Login;
