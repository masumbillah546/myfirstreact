import React from 'react';

class Home extends React.Component {
   render() {
      return (
         <div>

			<div class="container-fluid bg-1 text-center">
			  <h3 class="margin">Who Am I?</h3>
			  <h3>I'm an adventurer</h3>
			</div>

			<div class="container-fluid bg-2 text-center">
			  <h3 class="margin">What Am I?</h3>
			  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
			  <a href="#" class="btn btn-default btn-lg">
			    <span class="glyphicon glyphicon-search"></span> Search
			  </a>
			</div>

			<footer class="container-fluid bg-4 text-center">
			  <p>Bootstrap Theme Made By <a href="https://www.w3schools.com">www.w3schools.com</a></p> 
			</footer>

         </div>
      )
   }
}
export default Home;