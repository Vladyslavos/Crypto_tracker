import React from "react";
import Coin from "../Coin/Coin";
import Coins from "../Coins/Coins";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import useCoins from "../../hooks/list";

export default function CryptoTracker() {
  const { handleChange, value, filteredCoins } = useCoins();
  return (
    <>
      <Navbar value={value} handleChange={handleChange} />
      <Routes>
        <Route
          path="/Crypto_tracker"
          element={<Coins coins={filteredCoins} />}
        />
        <Route path="*" element={<Coins coins={filteredCoins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}
