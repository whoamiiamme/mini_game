import { mockData } from '../share/mockData';

function findIndex({ data, id }) {
	var result = -1;
	data.forEach((element, index) => {
		if (element.id === id) {
			result = index;
		}
	});
	return result;
}

export default (state = [], action) => {
	var index = -1;
	switch (action.type) {
		case 'getItem':
			var totalScope = 0;
			state = action.payload;
			for (var i = 0; state.length > i; i++) {
				totalScope += state[i].totalScore;
			}
			console.log(totalScope);
			return state;
		case 'wiritingScope':
			index = findIndex({ data: state, id: action.id });
			state[index].writingScore += action.payload;
			state[index].totalScore += action.payload;
			localStorage.setItem('mockData', JSON.stringify(state));
			return state;
		case 'readingScope':
			index = findIndex({ data: state, id: action.id });
			state[index].readingScore += 1;
			state[index].totalScore += 1;
			console.log(state);
			localStorage.setItem('mockData', JSON.stringify(state));
			return state;
		case 'Set local storage':
			localStorage.setItem('mockData', JSON.stringify(mockData));
			return state;
		default:
			return state;
	}
};
