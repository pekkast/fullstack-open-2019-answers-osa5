const prefix = 'blogApp';

const setItem = (name, stuff) => {
  window.localStorage.setItem(`${prefix}-${name}`, JSON.stringify(stuff));
};

const getItem = name => {
  const dataString = window.localStorage.getItem(`${prefix}-${name}`);
  if (!dataString) {
    return null;
  }
  return JSON.parse(dataString);
};

export default { getItem, setItem };
