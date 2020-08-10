import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getLocalStorage } from './actions';
import ACL from './share/ACL';
import { mockData } from './share/mockData';

function App(props) {
	useEffect(() => {
		if( localStorage && localStorage.getItem('mockData')) {
			props.getLocalStorage();

		} else {
			localStorage.setItem('mockData', JSON.stringify(mockData))
		}
	}, []);
	var { store } = props;
	var i = 0;
	const failed = JSON.parse(localStorage.getItem('failed'));
	var english;
	store.sort((quesition_1, quesition_2) => {
		if (quesition_1.totalScore > quesition_2.totalScore) return 1;
		else if (quesition_1.totalScore < quesition_2.totalScore) return -1;
		else return 0;
	});

	if (store.length > 0) {
		i = store[0].english === failed ? 1 : 0;
	}
	english = store.length > 0 ? store[i].english : 0;

	const renderSkill = () => {
		return <ACL store={store} position={i} />;
	};

	return (
		<React.Fragment>
			<div className='test-body'>
				<div className='test__framer'>
					<h2 className='test-header'>
						<span className='test-header--main'>Chọn từ phù hợp</span>
						<span className='test-header--sub'>{english}</span>
					</h2>
					{renderSkill()}
				</div>
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		store: state.data
	};
};

export default connect(mapStateToProps, { getLocalStorage })(App);
