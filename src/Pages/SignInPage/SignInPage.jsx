import React from 'react';
import TraineeSignIn from '../../Components/TraineeSignIn/TraineeSignIn';
import TrainerSignIn from '../../Components/TrainerSignIn/TrainerSignIn';
import './SignInPage.scss';

const SignInPage = () => {
	return(
		<div className="sign-in-page">
			<TraineeSignIn />
			<TrainerSignIn />
		</div>
	);
}

export default SignInPage;