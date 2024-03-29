import React from "react";
import PokemonCardDetail from "../page/PokemonCardDetail";
import { Navigate } from "react-router-dom";

function PrivateRoute({ authenticate }) {
  return authenticate === true ? (
    <PokemonCardDetail />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
