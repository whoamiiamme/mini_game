export const getLocalStorage = () => {
	return {
		type: 'getItem',
		payload: JSON.parse(localStorage.getItem('mockData'))
	};
};

export const markWiritingScope = ({ id, scope }) => {
	return {
		type: 'wiritingScope',
		id,
		payload: scope
	};
};

export const markReadingScope = ({ id, scope }) => {
	return {
		type: 'readingScope',
		id,
		payload: scope
	};
};

export const setLocalStorage = () => {
	return {
		type: 'Set local storage'
	};
};

