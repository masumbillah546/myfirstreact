import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
          <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <h2>This is Home</h2>
//     );
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
