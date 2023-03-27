import { GlobalStyle } from "./styles/GlobalStyle";
import { ResetStyle } from "./styles/ResetStyle";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import HomePage from "./pages/HomePage";
import SubscriptionPlanPage from "./pages/SubscriptionPlanPage"

function App() {

    const lsUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(lsUser)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <ResetStyle/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/subscriptions/:membership_id" element={<SubscriptionPlanPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
