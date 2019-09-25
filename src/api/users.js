export const getUsers = async () => {
	const response = await fetch('https://venbest-test.herokuapp.com/');
	const responseJSON = await response.json();
	return responseJSON;
};
