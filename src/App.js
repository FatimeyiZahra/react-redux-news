import React from "react";
import Layout from "./app/layout/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotMatch from "./pages/404/NotMatch";
import NewsDetails from "./pages/news/NewsDetails"
import NewsByCategory from "./pages/news/NewsByCategory"
import NewsList from "./manage/NewsList";
import Edit from "./manage/Edit"
import Details from "./manage/Details";
import Create from "./manage/Create";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/category/:id">
            <NewsByCategory/>
          </Route>
          <Route  path="/news/:id">
            <NewsDetails/>
          </Route>
          <Route exact path="/newslist">
            <NewsList/>
          </Route>
          <Route  path="/edit/:id">
            <Edit/>
          </Route>
          <Route  path="/details/:id">
            <Details/>
          </Route>
          <Route path="/create">
           <Create/>
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
