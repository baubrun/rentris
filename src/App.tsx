/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Spinner from "./shared/components/Spinner/Spinner";
import { HOME_PAGE  } from "./shared/constants/navigation";

const App: React.FC<any> = () => {


  const routes = (
    <Suspense fallback={<Spinner show />}>
      <Switch>
        <Route
        exact
          path={HOME_PAGE.path}
          render={(p) => <HOME_PAGE.render {...p} />}
        />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
