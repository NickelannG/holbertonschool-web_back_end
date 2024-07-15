export default function uploadPhoto(fileName) {
  const rejectPromise = new Promise((reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
  return rejectPromise;
}
