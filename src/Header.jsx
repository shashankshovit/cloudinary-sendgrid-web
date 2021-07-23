import {useState, useEffect} from 'react';

let Header = () => {
	let [existing, setExisting] = useState(false);

	useEffect(() => {
		setTimeout(()=> {setExisting(true)}, 5000);
	})

	const existingText = existing ? 'Old old' : 'Brand New';
	return (
		<div>This is Header section. {existingText}.</div>
	);
}

export default Header;