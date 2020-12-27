
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
class App extends React.Component {
   render() {
      return (
         <div>
         <Home />
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}
export default App;
