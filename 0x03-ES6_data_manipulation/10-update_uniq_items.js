export default function updateUniqueItems(data) {
  if (!(data instanceof Map)) {
    throw new Error('Cannot process');
  }

  data.forEach((value, key) => {
    if (value === 1) {
      data.set(key, 100);
    }
  });
  return data;
}
