import React from 'react';
import Test1 from './../pages/test1';
import Test2 from './../pages/test2';

function ACL(props) {
	var { store, position } = props;
    console.log(store)
	var readingScore = store.length > 0 ? store[position].readingScore : '';
	var writingScore = store.length > 0 ? store[position].writingScore : '';

	if (readingScore > writingScore) {
		return <Test1 position={position} store={store} />;
	} else {
		return <Test2 position={position} store={store} />;
	}
}

export default ACL;
