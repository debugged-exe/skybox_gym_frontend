import React from 'react';
import FormInput from '../../Components/FormInput/FormInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import './EnrollPage.scss';

const initialState = {
    email: '',
    designation: '',
    password: ''
}

class EnrollPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', designation: 'Select', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    traineeRegister = () => {
		console.log('click'+this.state.designation)
		const sigindata = {
			email: this.state.email,
			password:this.state.password,
            designation: this.state.designation
		} 
		const headers = new Headers();
		headers.append('Content-Type','application/json');
		
		
		
		fetch('https://skybox-athlete.herokuapp.com/signup', {
			method: "post",
			headers: {
				"Content-Type": "application/json"
				},
				body: JSON.stringify(sigindata)
	 }).then(res=>res.json())
	 .then(res=>{
		 if(res.user){
			this.props.history.push('/admin');
		 }
		 else if(res.errors){
			alert(res.errors.email+'\n'+res.errors.password+'\n'+res.errors.designation);
		 }
	 })
	}


    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>SignUp Form</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <label for="userType">Choose User Type:</label>
                    <select name="designation" id="userType" value={this.state.designation} onChange={this.handleChange}>
                        <option value="Select" >Select</option>
                      <option value="Trainer" >Trainer</option>
                      <option value="Trainee" >Trainee</option>
                    </select>
                    <FormInput
                         label='Password'
                         name="password"
                         type="password"
                         value={this.state.password}
                         required
                         handleChange={this.handleChange}
                     />
                     <CustomButton type="submit" onClick={this.traineeRegister}>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default EnrollPage;