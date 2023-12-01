import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState<number>(0);
	const [billInput, setBillInput] = useState<string>('');
	const [friendsInput, setFriendsInput] = useState<string>('');
	const [tipInput, setTipInput] = useState<string>('0.10');

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^0-9]/g, '');
		if (e.target.id === 'bill') {
			setBillInput(value);
		} else if (e.target.id === 'friends') {
			setFriendsInput(value);
		}
	};

	const calculate = () => {
		const tipValue: number = parseFloat(tipInput);
		const billValue: number = parseFloat(billInput);
		const friendsValue: number = parseInt(friendsInput, 10);

		if (!isNaN(billValue) && !isNaN(friendsValue) && friendsValue > 0) {
			const splitBill = (billValue * tipValue + billValue) / friendsValue;
			setCount(splitBill);
		} else {
			alert('dupa');
		}
	};

	return (
		<div className='container'>
			<div className='header-container'>
				<h1 className='header'>billsplitter</h1>
				<h2 className='title'>split your bills with friends !</h2>
			</div>
			<div className='inputs-container'>
				<label htmlFor='bill'>Amount to be paid:</label>
				<input
					className='billInput'
					type='text'
					id='bill'
					value={billInput}
					onChange={handleInput}
				></input>
				<label htmlFor='friends'>How many friends:</label>
				<input
					className='friendsInput'
					type='text'
					id='friends'
					value={friendsInput}
					onChange={handleInput}
				></input>
				<label htmlFor='tip'>Select tip amount</label>
				<select
					className='tipInput'
					id='tip'
					value={tipInput}
					onChange={(e) => setTipInput(e.target.value)}
				>
					<option value='0.10'>10%</option>
					<option value='0.15'>15%</option>
					<option value='0.25'>25%</option>
				</select>
			</div>
			<button className='calculate-btn' onClick={calculate}>
				count
			</button>
			<p>Split Bill: {count.toFixed(2)}</p>
		</div>
	);
}

export default App;
