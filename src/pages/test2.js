import React from 'react';
import { connect } from 'react-redux';
import { markReadingScope } from './../actions';
import App from './../App';

function Test2(props) {
	var { store, position } = props;
	var quesitions = store.length > 0 ? [ store[position], store[position + 1] ] : '';
	var answerReading = quesitions.length > 0 ? [ store[position].vietnamese, store[position + 1].vietnamese ] : '';
	var i = Math.ceil(Math.random());
    console.log(store);
    

	const checkAnserReading = (index) => {
		if ( answerReading[index] === store[position].vietnamese) {
            props.markReadingScope({id: store[position].id, scope: 1})
            window.location.reload();
		} else {
			localStorage.setItem('failed',JSON.stringify( store[position].english ))
            props.markReadingScope({id: store[position].id, scope: 0})
            window.location.reload();
		}
	};

	return (
		<React.Fragment>
			<button onClick={() => checkAnserReading(i)} className='btn btn-left'>
				{answerReading[i]}
			</button>
			<button onClick={() => checkAnserReading(i === 0 ? 1 : 0)} className='btn btn-right'>
				{answerReading[i === 0 ? 1 : 0]}
			</button>{' '}
		</React.Fragment>
	);
}

export default connect(null, { markReadingScope })(Test2);
