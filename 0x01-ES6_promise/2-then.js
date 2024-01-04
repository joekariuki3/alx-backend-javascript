export default function handleResponseFromAPI(promise) {
  return new Promise((resolver, reject) => {
    if (promise) {
      resolver({ status: 200, body: 'success' });
		  console.log('Got a response from the API');
    } else {
      reject(new Error());
    }
  });
}
