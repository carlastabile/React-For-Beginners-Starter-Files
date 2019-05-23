import React from 'react';

class StorePicker extends React.Component {

	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this);
		console.log("Gonna create component");
	}

	myInput = React.createRef();

	handleClick() {
		alert("hey");
	}

	goToStore(event){
		event.preventDefault(); // stop the page from submitting
		// get the text from input 
		console.log(this.myInput);
		// change page to /stores/whatever
		
	}

	render(){
		return (
			// I can return sibling elements, just one.
			<form className="storeSelector" onSubmit={this.goToStore}>
				<h2> Please Enter A Store</h2>
				<button onClick={this.handleClick}>Click me!</button>
				<input type="text" 
				ref={this.myInput}
				required 
				placeholder="Store Name"
				defaultValue="Random Name"
				/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;