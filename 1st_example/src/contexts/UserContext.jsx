import React from "react";
import UserProfile from "./UserProfile";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserProfile.Provider value={{ user, setUser }}>
      {children}
    </UserProfile.Provider>
  );
};

export default UserContextProvider;
