import {
  Route,
  Routes,
  useLocation,
  Location,
} from "react-router-dom";
import AMHome from "./AMHome";
import AMMenu from "./AMMenu";
import AMReservations from "./AMReservations";
import React from "react";

import { AnimatePresence } from "framer-motion";

function AMAnimatedRoutes() {
  const location: Location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AMHome />} />
        <Route path="*" element={<AMHome />} />
        <Route path="/menu" element={<AMMenu />} />
        <Route
          path="/reservations"
          element={<AMReservations currentPath="string" />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AMAnimatedRoutes; 
