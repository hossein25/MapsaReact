import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import CocktailDetail from "./CocktailDetail";
import { CocktailProvider } from "./CocktailProvider";
import Home from "./Home";
import Home2 from "./Home2";
import Layout from "./Layout";
import { aboutUsPath, cocktailDetailPath } from "./routePath";

const Cocktail = (props) => {
  return (
    <Router>
      <CocktailProvider>
        <Layout>
          <Switch>
            <Route path={aboutUsPath} component={About} />
            <Route path={`${cocktailDetailPath}/:id`} component={CocktailDetail} />
            <Route path="/" component={Home2} />
          </Switch>
        </Layout>
      </CocktailProvider>
    </Router>
  );
};

export default Cocktail;
