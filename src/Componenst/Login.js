/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
	const [email, setemail] = useState(null);

	const [password, setpassword] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'email') {
			setemail(value);
		}

		if (id === 'password') {
			setpassword(value);
		}
	};

	const handleSubmit = () => {
		console.log(email, password);
	};
	const navigate = useNavigate();

	const registerHandler = () => {
		navigate('/');
	};

	return (
		<div className='form'>
			<div className='form-body'>
				<h1 className='header-1'> Login </h1>
				<div className='email'>
					<label className='form__label'>Enter Your Email ID</label>
					<br></br>
					<input
						className='form__input'
						type='text'
						onChange={(e) => handleInputChange(e)}
						id='email'
						placeholder='Your email'
					/>
				</div>

				<div className='password'>
					<label className='form__label'>Password </label>
					<br></br>
					<input
						type='password'
						id='password'
						className='form__input'
						onChange={(e) => handleInputChange(e)}
						placeholder='password'
					/>
				</div>

				<button
					className='button-2'
					onClick={() => handleSubmit()}
					type='submit'>
					Login
				</button>
				<button
					className='button-2'
					onClick={registerHandler}>
					Register
				</button>
				<br></br>
				<a
					className='forget'
					href=''>
					Forget Password
				</a>
				<button
					className='button-3'
					onClick={() => handleSubmit()}
					type='submit'>
					Email Verification
				</button>
			</div>
		</div>
	);
}
export default Login;
