import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
import './TraineeSignIn.scss';

const initialState = {
	email: '',
	password: ''
}

class TraineeSignIn extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = initialState;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	}

	handleChange = (event) => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}

	render(){
		return(
			<div className="sign-in">
				<h2 className='title'>SignIn As Trainee</h2>

				<form onSubmit={this.handleSubmit}>
					<FormInput
					label="Email"
					name="email" 
					type="email" 
					value={this.state.email} 
					handleChange={this.handleChange}
					required
					/>
					<FormInput
					label='Password' 
					name="password" 
					type="password" 
					value={this.state.password} 
					handleChange={this.handleChange}
					required
					/>
					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default TraineeSignIn;