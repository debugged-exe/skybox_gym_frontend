import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
import './TraineeSignIn.scss';
import {withRouter} from 'react-router'

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

	traineesignin = () => {
		console.log('click')
		const sigindata = {
			email: this.state.email,
			password:this.state.password
		} 
		const headers = new Headers();
		headers.append('Content-Type','application/json');
		
		
		
		fetch('https://skybox-athlete.herokuapp.com/login', {
			method: "post",
			headers: {
				"Content-Type": "application/json"
				},
				body: JSON.stringify(sigindata)
	 }).then(res=>res.json())
	 .then(res=>{
		 if(res.user){
			localStorage.setItem('id',res.user)
			localStorage.setItem('det_id',res.details_id)
			this.props.history.push('/trainee');
		 }
		 else if(res.errors){
			alert('Wrong Credentials');
		 }
	 })
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
					<CustomButton type="submit" onClick={this.traineesignin}>Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default withRouter(TraineeSignIn);