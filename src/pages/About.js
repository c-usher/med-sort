import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function About(props) {
	const [date, setDate] = useState(new Date());

	const onChange = date => {
		setDate(date);
	};

	const onClickDay = day => {
		console.log('hello');
	};
	return (
		<div>
			<Calendar onChange={onChange} value={date} />
			<div>{date.toString()}</div>
		</div>
	);
}
