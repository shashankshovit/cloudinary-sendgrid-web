import {useState} from 'react';

import './TextInput.css';

const TextInput = (props) => {
	let classes = 'row-wrapper';
	if(props.className) {
		classes += ` ${props.className}`;
	}
	let [value, setValue] = useState(props.value || '');
	// const changeHandler = props.changeHandler ? props.changeHandler : (evt)=>{setValue(evt.target.value)};
	// const required = 'required' in props ? props.required : false;
	const changeHandler = (evt) => {
		// console.log(value);
		setValue(evt.target.value);
		typeof props.changeHandler === 'function' && props.changeHandler(evt);
	};

	return (
		<tr className={classes}>
			<td><label>{props.label}</label></td>
			<td>
				<input
					value={value}
					placeholder={props.placeholder}
					required={props.required}
					onChange={changeHandler}
				/>
			</td>
		</tr>
	);
}

// const EmailInput = (props) => {

// 	const emailValidator = () => {
// 		const changeHandler = (evt) => {

// 		}
// 	}

// }

export default TextInput;