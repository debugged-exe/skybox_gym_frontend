import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
import './TraineeUpdateInfo.scss';

const initialState = {
	name: '',
	email: '',
	contact:'',
	gender: '',
	age:'',
	target: '',
	medical: '',
	mode: '',
	place: '',
	time: '',
	height: '',
	weight: '',
	bmi: ''

}

class TraineeRegister extends React.Component {
	constructor(props){
		super(props);
		this.state = initialState;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			name: '',
			email: '',
			contact:'',
			gender: '',
			age:'',
			target: '',
			medical: '',
			mode: '',
			place: '',
			time: '',
			height: '',
			weight: '',
			bmi: ''
		})
	}

	handleChange = (event) => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}

	traineeUpdateInfo = () => {
		console.log('click')
		const {name,email,contact,gender,age,target,medical,mode,place,time,height,weight,bmi} = this.state;
		const info = {
			name: name,
			email: email,
			contact: contact,
			gender: gender,
			age: age,
			target: target,
			medical: medical,
			mode: mode,
			place: place,
			time: time,
			height: height,
			weight: weight,
			bmi: bmi
		} 
		const headers = new Headers();
		headers.append('Content-Type','application/json');
		
		const currUserDetID = localStorage.getItem('id')
		console.log('curr is ' +currUserDetID)
		
		fetch('https://skybox-athlete.herokuapp.com/update-trainee/'+currUserDetID, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
				},
				body: JSON.stringify(info)
	 }).then(res=>res.json())
	 .then(res=>{
		 console.log(res);
		 if(res.status==="success"){
			// this.props.history.push('/trainer');
			console.log('donee')
		 }
		 else if(res.status==="failed"){
			alert("could not save the data");
		 }
	 })
	}

	render() {
		return(
			<div className="register">
				<h2>Update Info</h2>

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
					type="text"
					value={this.state.contact}
					handleChange={this.handleChange}
					required
					/>
					<div className="group">
						<select
						name="gender"
						value={this.state.gender} 
						className="form-input" 
						onChange={this.handleChange}
						required>
							<option className="form-input" value=""></option>
							<option className="form-input" value="male">Male</option>
							<option className="form-input" value="female">Female</option>
						</select>
						<label className={`${this.state.gender.length ? 'shrink' : ''} form-input-label`}>
							Gender	
						</label>
					</div>
					<FormInput 
					label="Age"
					name="age"
					type="text"
					value={this.state.age}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Height"
					name="height"
					type="text"
					value={this.state.height}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="Weight"
					name="weight"
					type="text"
					value={this.state.weight}
					handleChange={this.handleChange}
					required
					/>
					<FormInput 
					label="BMI"
					name="bmi"
					type="text"
					value={this.state.bmi}
					handleChange={this.handleChange}
					required
					/>
					<div className="group">
						<select
						name="target"
						value={this.state.target} 
						className="form-input" 
						onChange={this.handleChange}
						required>
							<option className="form-input" value=""></option>
							<option className="form-input" value="gain">Weight Gain</option>
							<option className="form-input" value="loss">Weight Loss</option>
							<option className="form-input" value="transform">Body Transformation</option>
						</select>
						<label className={`${this.state.target.length ? 'shrink' : ''} form-input-label`}>
							Target	
						</label>
					</div>
					<FormInput 
					label="Medical Condition"
					name="medical"
					type="text"
					value={this.state.medical}
					handleChange={this.handleChange}
					required
					/>
					<div className="group">
						<select
						name="mode"
						value={this.state.mode} 
						className="form-input" 
						onChange={this.handleChange}
						required>
							<option className="form-input" value=""></option>
							<option className="form-input" value="offline">Offline</option>
							<option className="form-input" value="online">Online</option>
						</select>
						<label className={`${this.state.mode.length ? 'shrink' : ''} form-input-label`}>
							Mode
						</label>
					</div>
					<div className="group">
						<select
						name="place"
						value={this.state.place} 
						className="form-input" 
						onChange={this.handleChange}
						required
						disabled={`${this.state.mode==='online'? 'true': ''}`}
						style = {{background: `${this.state.mode==='online'? 'grey': 'white'}`}}
						>
							<option className="form-input" value=""></option>
							<option className="form-input" value="gym">Gym</option>
							<option className="form-input" value="home">Your Place</option>
						</select>
						<label className={`${this.state.place.length ? 'shrink' : ''} form-input-label`}>
							Place
						</label>
					</div>
					<FormInput 
					label="Time"
					name="time"
					type="text"
					value={this.state.time}
					handleChange={this.handleChange}
					required
					/>
					<CustomButton type="submit" onClick={this.traineeUpdateInfo}>Update</CustomButton>
				</form>
			</div>
		);
	}
}

export default TraineeRegister;