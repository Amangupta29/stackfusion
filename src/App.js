/** @format */

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Componenst/Register';
import Header from './Componenst/Header';
import Login from './Componenst/Login';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/'
					element={<Register />}
				/>
			</Routes>
		</div>
	);
}

export default App;
