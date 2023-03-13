/** @format */

import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';






function Register() {




	const [yourName, setyourName] = useState(null);

	const [email, setemail] = useState(null);
	const [phonenumber, setphonenumber] = useState(null);
	const [address, setaddress] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'yourName') {
			setyourName(value);
		}

		if (id === 'email') {
			setemail(value);
		}
		if (id === 'phonenumber') {
			setphonenumber(value);
		}
		if (id === 'address') {
			setaddress(value);
		}
	};

	const handleSubmit = () => {
		console.log(yourName, email, phonenumber, address);
	};

	const navigate = useNavigate();
	const LoginHandler = () => {
		navigate('/login');
	};

	return (
		<div className='form'>
			<div className='form-body'>
				<h1 className='header-1'>Register </h1>
				<div className='username'>
					<label className='form__label'>Your Name </label>
					<br></br>
					<input
						className='form__input'
						type='text'
						onChange={(e) => handleInputChange(e)}
						id='yourName'
						placeholder='Your Name'
					/>
				</div>

				<div className='email'>
					<label className='form__label'>Email </label>
					<br></br>
					<input
						type='email'
						id='email'
						className='form__input'
						onChange={(e) => handleInputChange(e)}
						placeholder='Email'
					/>
				</div>
				<div className='phone-number'>
					<label className='form__label'>Phone Number </label>
					<br></br>
					<input
						className='form__input'
						type='phonenumber'
						id='phonenumber'
						onChange={(e) => handleInputChange(e)}
						placeholder='Phone Nmuber'
					/>
				</div>
				<div className='Date Of Birth'>
					<label className='form__label'>Date Of Birth </label>
					<br></br>
					<input
						className='form__input'
						type='Address'
						id='Address'
						onChange={(e) => handleInputChange(e)}
						placeholder='Enter your DOB'
					/>
				</div>
				<button
					className='button'
					onClick={() => handleSubmit()}
					type='submit'>
					Register
				</button>
				<button
					onClick={LoginHandler}
					className='button'>
					Login
				</button>
			</div>
		</div>
	);
}
export default Register;
