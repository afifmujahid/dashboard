/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnErrorOccurred } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import RestaurantPage from "../Restaurant";
import RestaurantSetup from "../RestaurantSetup";
import Employee from "../Employee";
import KeyPersonnel from "../KeyPersonnel";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={RestaurantPage} exact />
        {/* <Route
          path={`/plugins/${pluginId}/setup`}
          component={RestaurantSetup}
        /> */}
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
