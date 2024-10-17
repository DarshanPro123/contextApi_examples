import { useContext } from "react";
import UserProfile from "../contexts/UserProfile";

const MainPage = () => {
  const { user } = useContext(UserProfile);
  if (!user)
    return <div className="w-full text-red-600 text-center ">login please</div>;

  return (
    <h2 className="w-full first-letter:uppercase text-green-600 text-5xl text-center ">
      Welcome {user.username} !!
    </h2>
  );
};

export default MainPage;
