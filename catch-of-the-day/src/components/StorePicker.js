import React from 'react';

class StorePicker extends React.Component {
	render(){
		return (
			// I can return sibling elements, just one.
			<form className="storeSelector">
				<h2> Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;