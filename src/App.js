
import Home from "./Home.js";
import Contact from "./Contact.jsx";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function App() {
  return (
    <Router>

      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
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

          <Route path="/contact">
            <Contact />
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
