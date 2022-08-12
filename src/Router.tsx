import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Crypto-Tracker" element={<Coins />} />
        <Route path="/Crypto-Tracker/:coinID/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
