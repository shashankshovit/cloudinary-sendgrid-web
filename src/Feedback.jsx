import {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from './Header';
import Head from './Head';
import TextInput from './TextInput';
import Layout from './Layout';

let Feedback = () => {

	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
		files: [],
		uploadText: 'Upload',
		submitText: 'Submit'
	});

	const changeHandler = handlerType => evt => {
		setValues({...values, [handlerType]: evt.target.value});
		// console.log(values);
	};

	const submitButtonHandler = (evt) => {
		evt.preventDefault();
		if(![values.name, values.email, values.message].every(ele => ele))
			return false;
		setValues({...values, submitText: 'Submitting...'});
		console.table(values);
		const {submitText, uploadText, ...parameters} = values;
		axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API}/feedback/submit`,
			data: parameters
		}).then(response => {
			console.warn('Received resposne: ', response);
			console.log(response.data);
			if(response.data.success){
				toast.success('Thanks for providing us feedback.');
				setValues({
					name: '',
					email: '',
					message: '',
					files: [],
					uploadText: 'Uploaded !',
					submitText: 'Submitted !'
				});
				setTimeout(()=> {setValues({...values, uploadText: 'Upload', submitText: 'Submit'})}, 1500);
			}
			else toast.error('Feedback submission failed. Please try again.');
		}).catch(error => {
			console.log('Submit error: ', error);
			toast.error('Failed to submit feedback. Try again.');
		});
	};

	// const onUploadButtonClick = (evt) => {evt.preventDefault();console.log(evt)};

	const onUploadButtonClick = (evt) => {
		evt.preventDefault();
		window.cloudinary.openUploadWidget(
		// const upwdg = window.cloudinary.createUploadWidget(
			{
				cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
				upload_preset: process.env.REACT_APP_UPLOAD_PRESET
			}, (error, result)=>{
				if(result) {
					setValues({...values, files: result.map(rs=>rs.secure_url)});
				} else {
					console.warn('Errored out: ', error);
				}
			}
		);
	};

	return (
		<>
			<Layout>
			<h2>Feedback</h2>
			<hr/>
			<Header/>
			<Head/>
			<button onClick={(evt)=>{onUploadButtonClick(evt)}}>{values.uploadText}</button>
			<form>
				<table>
					<tbody>
						<tr><td colSpan='2'></td></tr>
						<TextInput
							label='Name'
							placeholder='Your name please'
							required={true}
							value={values.name}
							changeHandler={changeHandler('name')}
						/>
						<TextInput
							label='Email'
							placeholder='Your email please'
							required={true}
							value={values.email}
							pattern="[\w-._]+@[\w-_]+.[\w]"
							changeHandler={changeHandler('email')}
						/>
						<TextInput
							label='Message'
							placeholder='Your message'
							value={values.message}
							changeHandler={changeHandler('message')}
						/>
						<tr><td colSpan='2'><button onClick={submitButtonHandler}>{values.submitText}</button></td></tr>
					</tbody>
				</table>
			</form>
			<ToastContainer/>
			</Layout>
		</>
	);
}

export default Feedback;