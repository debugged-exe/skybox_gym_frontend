import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
import './TrainerSignIn.scss';

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

	trainersignin = () => {
		console.log('click')
		const sigindata = {
			email: this.state.email,
			password:this.state.password
		} 
		const headers = new Headers()
		headers.append('Content-Type','application/json')

		fetch('https://skybox-athlete.herokuapp.com/login',{
			mode:'cors',
			method:'post',
			body:sigindata,
			headers
		})
		.then(res=>
			console.log(res.json())
		)
	}

	render(){
		return(
			<div className="sign-in">
				<h2 className='title'>SignIn As Trainer</h2>

				<form onSubmit={this.handleSubmit}>
					<FormInput
					label="Email"
					name="email" 
					type="email" 
					value={this.state.email} 
					required 
					handleChange={this.handleChange}
					/>
					<FormInput
					label='Password' 
					name="password" 
					type="password" 
					value={this.state.password} 
					required 
					handleChange={this.handleChange}
					/>
					<CustomButton type="submit" onClick={this.trainersignin}>Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default TraineeSignIn;