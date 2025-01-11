export const getLocalStorageState = (localStorageName: string) => {
  const savedState = localStorage.getItem(localStorageName);
  if (savedState) return JSON.parse(savedState);
  return null;
};
