export default function hasValuesFromArray(set, array) {
  for (const i of array) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
}
