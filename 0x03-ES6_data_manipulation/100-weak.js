export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // Get the number of queries for the current endpoint from the WeakMap
  let queryCount = weakMap.get(endpoint) || 0;

  // Increment the query count
  queryCount += 1;

  // Update the query count in the WeakMap
  weakMap.set(endpoint, queryCount);

  // Check if the query count is greater than or equal to 5
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
  // Return Query count
  return queryCount;
}
