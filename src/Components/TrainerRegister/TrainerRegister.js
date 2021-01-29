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
			specialization: ''
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
			specialization: ''
		});
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
					label="Age"
					name="age"
					type="text"
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
					<CustomButton type="submit">Enroll</CustomButton>
				</form>
			</div>
		);
	}
}

export default TrainerRegister;