import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
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
        this.setState({ email: '', designation: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
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
                    <select name="userType" id="userType">
                      <option value="Trainer">Trainer</option>
                      <option value="Trainee">Trainee</option>
                    </select>
                    <FormInput
                         label='Password'
                         name="password"
                         type="password"
                         value={this.state.password}
                         required
                         handleChange={this.handleChange}
                     />
                     <CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default EnrollPage;