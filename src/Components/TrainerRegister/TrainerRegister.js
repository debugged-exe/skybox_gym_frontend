import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
import './TrainerRegister.scss';

const initialState = {
			name: '',
			email: '',
			age: '',
			experience: '',
			certification: '',
			clients_handled: '',
			specialization: '',
			contact:''
		}

class TrainerRegister extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = initialState;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			name: '',
			email: '',
			age: '',
			experience: '',
			certification: '',
			clients_handled: '',
			specialization: '',
			contact: ''
		});
	}

	trainerUpdateInfo = () => {
		console.log('click')
		const {name,email,contact,age,experience,certification,clients_handled,specialization} = this.state;
		const info = {
			name: name,
			email: email,
			contact: contact,
			gender:'male',
			age: age,
			experience:{
				years:experience,
				clients_handled: clients_handled
			},
			certification: certification,
			specialization:specialization
		} 
		const headers = new Headers();
		headers.append('Content-Type','application/json');
		
		
		
		fetch('https://skybox-athlete.herokuapp.com/update-trainer', {
			method: "post",
			headers: {
				"Content-Type": "application/json"
				},
				body: JSON.stringify(info)
	 }).then(res=>res.json())
	 .then(res=>{
		 console.log(res);
		 if(res.status=="success"){
			this.props.history.push('/trainer');
			console.log('donee')
		 }
		 else if(res.status=="failed"){
			alert("could not save the data");
		 }
	 })
	}

	

	handleChange = (event) => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}

	numericFilter = (event) => {
		event.target.value = event.target.value.replace(/[^\0-9]/ig, "");
	}

	render() {
		return(
			<div className="register">
				<h2>Enroll as Trainer</h2>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
					label="Name"
					name="name"
					type="text"
					value={this.state.name}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Email"
					name="email"
					type="email"
					value={this.state.email}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Contact"
					name="contact"
					type="number"
					value={this.state.contact}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Age"
					name="age"
					type="number"
					value={this.state.age}
					onInput={this.numericFilter}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Experience"
					name="experience"
					type="text"
					value={this.state.experience}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Certification"
					name="certification"
					type="text"
					value={this.state.certification}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="No of Clients Handled"
					name="clients_handled"
					type="text"
					value={this.state.clients_handled}
					onInput={this.numericFilter}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Specialization"
					name="specialization"
					type="text"
					value={this.state.specialization}
					handleChange={this.handleChange}
					required
					/>
					<CustomButton type="submit" onClick={this.trainerUpdateInfo}>Enroll</CustomButton>
				</form>
			</div>
		);
	}
}

export default TrainerRegister;