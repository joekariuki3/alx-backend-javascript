export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = [];
  array.map((object) => {
    ids.push(object.id);
    return 0;
  });
  return ids;
}
