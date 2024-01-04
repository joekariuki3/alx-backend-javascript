export default function handleResponseFromAPI(promise) {
	return new Promise((resolver, reject) => {
		if (promise) {
			resolver({status: 200, body: 'success'});
		}
		else {
			reject(new Error());
		}
		console.log('Got a response from the API');
	});
}
