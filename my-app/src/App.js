//import logo from './logo.svg';
import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import Readers from "./components/readers";
import Read from "./components/read";
import AddReaders from "./components/addreaders";
import UpdateReaders from "./components/updatereaders";
import Posts from "./components/posts";
import Register from "./components/register";
import PageNotFound from "./components/pagenotfound";

import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/readers/add" component={AddReaders} />
        <Route path="/readers" component={Readers} />
        <Route path="/read" component={Read} />
        <Route exact path="/update/readers/:id" component={UpdateReaders} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
