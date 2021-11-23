export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error();
  }
};

export const getFromLocalStorage = key => {
  try {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    throw new Error();
  }
};
