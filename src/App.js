import { GlobalStyle } from "./styles/GlobalStyle";
import { ResetStyle } from "./styles/ResetStyle";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <ResetStyle/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
