import React, { useEffect } from "react";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Inicio } from "../components/Inicio";
import { CentrosAyuda } from "../components/CentrosAyuda";
import { Quiz } from "../components/Quiz";

export const DashboardRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />

      <div>
        <Switch>
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/centros" component={CentrosAyuda} />
          <Route exact path="/inicio" component={Inicio} />
          <Redirect to="/inicio" />
        </Switch>
      </div>
    </>
  );
};
