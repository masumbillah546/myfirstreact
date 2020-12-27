import logo from './logo.svg';
import './App.css';
import Hello from './mycomponent/Hello';
import WebDevelopment from './mycomponent/WebDevelopment';
import React from 'react';

class App extends React.Component {

	 constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }

   render() {
var i='5';
      return (
          
        <div className="App">

      	
        <Hello />
        <WebDevelopment />
        
    
          
            <table>
               <tbody>
                  {this.state.data.map((person) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }


  

}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.key}</td>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
   
}

App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."}

export default App;
