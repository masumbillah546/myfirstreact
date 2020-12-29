import React from 'react';
// import ReactDOM from 'react-dom';

class Contact extends React.Component {


	constructor(props){

		super(props);

		this.email=this.email.bind(this);
		this.password=this.password.bind(this);

		this.state={
			email:"",
			password:"",
		}

	}

	email(e){
		this.setState({
			email.e.target.value;
		})
	}

	password(e){
		this.setState({
			password.e.target.value;
		})
	}

	submit(e){
		e.preventDefault()
	}





   render() {
      return (
         <div class="container">
         <div class="jumbotron">

         	<h1>Contact Us</h1>
         </div>
            <form onsubmit="submit()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">Email address</label>
				    <input value="{this.state.email}" type="email" class="form-control" email(this.state.email) aria-describedby="emailHelp" placeholder="Enter email" />
				    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input value="{this.state.password}" type="password" class="form-control" password(this.state.email) placeholder="Password" />
				  </div>
				  
				  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
         </div>
      )
   }
}

export default Contact;