import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage.jsx/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import StartAuction from "./pages/StartAuction/StartAuctionPage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";

// const Home = () => (
//   <HeroBanner>
//     <h1>Home</h1>
//   </HeroBanner>
// );
// const Other = () => (
//   <HeroBanner>
//     <h1>Other</h1>
//   </HeroBanner>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/artworks/:id" element={<DetailsPage />} />
        <Route path="/auction" element={<StartAuction />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
