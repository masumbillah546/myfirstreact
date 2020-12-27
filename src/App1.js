import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
            <h3>{this.props.footerProp}</h3>
         </div>
      );
   }
}

App.defaultProps = {
	headerProp: "Headeritems",
	contentProp: "Content Items",
	footerProp: "Footer items"
}
export default App;