import UserContextProvider from "./contexts/UserContext";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1 className="text-red-600 text-center">React Context Example</h1>
        <Login />
        <MainPage />
      </UserContextProvider>
    </>
  );
}

export default App;
