import React, { useState } from 'react';
import { connect } from 'react-redux';
import { markWiritingScope } from './../actions'

function Test1(props) {
	var { store, position } = props;
	const [ text, setText ] = useState('');
	const checkAnswerWriting = (e) => {
		if (e.keyCode === 13) {
			if (text.toUpperCase() === store[position].vietnamese.toUpperCase()) {
				props.markWiritingScope({id: store[position].id, scope: 1})
				window.location.reload();
			} else {
				localStorage.setItem('failed',JSON.stringify( store[position].english) )
				props.markWiritingScope({id: store[position].id, scope: 0})
				window.location.reload();
			}
		}
	};
	return (
		<React.Fragment>
			<input
				value={text}
				onKeyDown={checkAnswerWriting}
				onChange={(e) => setText(e.target.value)}
				className='input'
			/>
		</React.Fragment>
	);
}


export default connect(null, { markWiritingScope })(Test1);
