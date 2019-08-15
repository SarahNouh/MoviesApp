/**
 * @Author: sarahnouh
 * @Date:   2019-08-14
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15
 */

import AddMovie from "./pages/add-movie/add-movie";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesList from "./pages/movies-list/movies-list";
import React from "react";
import "./App.scss";

const App: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AddMovie} />
          <Route path="/all" component={MoviesList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
