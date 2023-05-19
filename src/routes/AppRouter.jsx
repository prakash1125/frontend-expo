import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import { SportsPage } from "../pages/Sports";
import { HomePage } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { InPlayPage, IndianCasinoPage, IplClubPage, LiveCasinoPage, SlotsPage } from "../pages";
import { DepositPage } from "../pages/Deposit";
import { WithdrawalPage } from "../pages/Withdrawal";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path={Paths.home} element={<HomePage />} />
        <Route path={Paths.sports} element={<SportsPage />} />
        <Route path={Paths.inplay} element={<InPlayPage />} />
        <Route path={Paths.indianCasino} element={<IndianCasinoPage />} />
        <Route path={Paths.slots} element={<SlotsPage />} />
        <Route path={Paths.iplclub} element={<IplClubPage />} />
        <Route path={Paths.liveCasino} element={<LiveCasinoPage />} />
        <Route path={Paths.deposit} element={<DepositPage />} />
        <Route path={Paths.withdrawal} element={<WithdrawalPage />} />
      </Route>
    </Routes>
  );
};
