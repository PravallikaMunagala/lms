//import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Posts from "./components/posts";
import Register from "./components/register";
import PageNotFound from "./components/pagenotfound";

import { Route, Routes, Navigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Navigate from="/home" to="/" />
        <Route component={PageNotFound} />
      </Routes>
  
    </div>
  );
}

export default App;
