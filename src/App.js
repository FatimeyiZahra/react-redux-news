import React from "react";
import Layout from "./app/layout/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotMatch from "./pages/404/NotMatch";
import NewsDetails from "./pages/news/NewsDetails"
import NewsByCategory from "./pages/news/NewsByCategory"


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route  path="category/:id">
            <NewsByCategory/>
          </Route>
          <Route  path="news/:id">
            <NewsDetails/>
          </Route>
          <Route path="*">
           <NotMatch/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
