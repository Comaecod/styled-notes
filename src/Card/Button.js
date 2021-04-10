import React from 'react';

const button = (props) => {
	return (
		<div>
			<button>Edit</button>
			<button onClick={props.changedColor}>Change Color</button>
			<button>Delete</button>
		</div>
	);
};

export default button;
